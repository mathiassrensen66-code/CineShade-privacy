import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import '../pages/HomePage.css'
import './ShadePreview.css'

const BASE = import.meta.env.BASE_URL

const PREVIEW_STILLS = [
  'preview/movie-1.jpg',
  'preview/movie-2.jpg',
  'preview/movie-3.jpg',
  'preview/movie-4.jpg',
  'preview/cinema-1.jpg',
  'preview/cinema-2.jpg',
  'preview/cinema-3.jpg',
] as const

type PreviewStill = (typeof PREVIEW_STILLS)[number]

const MAX_SHADE = 0.98
const DEFAULT_DIM = 0.45

function pickStill(exclude?: PreviewStill): PreviewStill {
  const pool = exclude ? PREVIEW_STILLS.filter((s) => s !== exclude) : PREVIEW_STILLS
  return pool[Math.floor(Math.random() * pool.length)]
}

function clampDim(value: number) {
  return Math.min(0.95, Math.max(0.05, value))
}

export function ShadePreview() {
  const [still, setStill] = useState<PreviewStill>(PREVIEW_STILLS[0])
  const [dim, setDim] = useState(DEFAULT_DIM)
  const [loaded, setLoaded] = useState(false)
  const frameRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const shuffle = useCallback(() => {
    setLoaded(false)
    setStill((current) => pickStill(current))
  }, [])

  const setDimFromClientY = useCallback((clientY: number) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    const y = clientY - rect.top
    // Top = lighter, bottom = darker — same idea as pulling a cinema dimmer down
    const level = clampDim(y / rect.height)
    setDim(level)
  }, [])

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    setDimFromClientY(event.clientY)
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    setDimFromClientY(event.clientY)
  }

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = false
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const shadeOpacity = dim * MAX_SHADE
  const percent = Math.round(dim * 100)

  return (
    <div className="shade-preview" aria-label="Interactive dimmer preview">
      <div className="shade-preview__head">
        <p className="shade-preview__hint">
          Drag up or down on the scene — or use the slider. Same preview as the app.
        </p>
        <button type="button" className="shade-preview__shuffle" onClick={shuffle}>
          Shuffle
        </button>
      </div>

      <div className="letterbox letterbox--top" aria-hidden="true" />
      <div className="screen">
        <div
          ref={frameRef}
          className="screen__picture screen__picture--interactive"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {!loaded && (
            <div className="screen__loading" aria-hidden="true">
              Loading preview…
            </div>
          )}
          <img
            className="screen__photo"
            src={`${BASE}${still}`}
            alt="Sample streaming scene"
            draggable={false}
            onLoad={() => setLoaded(true)}
          />
          <div className="screen__haze" aria-hidden="true" />
          <div className="screen__meta">
            <span className="screen__meta-label">Sample stream</span>
            <span className="screen__meta-badge">{percent}%</span>
          </div>
          <div className="screen__shade" style={{ opacity: shadeOpacity }} aria-hidden="true" />
          <p className="screen__drag-hint" aria-hidden="true">
            Drag ↕
          </p>
        </div>
        <div className="screen__beam" aria-hidden="true" />
      </div>
      <div className="letterbox letterbox--bottom" aria-hidden="true" />

      <label className="fader">
        <span className="fader__label">Preview darkness</span>
        <span className="fader__value">{percent}%</span>
        <input
          type="range"
          min={0.05}
          max={0.95}
          step={0.01}
          value={dim}
          onChange={(e) => setDim(Number(e.target.value))}
          aria-label="Adjust preview darkness"
        />
      </label>
    </div>
  )
}
