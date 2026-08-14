import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { PREVIEW_STILL_URLS, type PreviewStillUrl } from '../assets/images'
import '../pages/HomePage.css'
import './ShadePreview.css'

const MAX_SHADE = 0.98
const DEFAULT_DIM = 0.45

function pickStill(exclude?: PreviewStillUrl): PreviewStillUrl {
  const pool = exclude ? PREVIEW_STILL_URLS.filter((s) => s !== exclude) : PREVIEW_STILL_URLS
  return pool[Math.floor(Math.random() * pool.length)]
}

function clampDim(value: number) {
  return Math.min(0.95, Math.max(0.05, value))
}

export function ShadePreview() {
  const [still, setStill] = useState<PreviewStillUrl>(PREVIEW_STILL_URLS[0])
  const [dim, setDim] = useState(DEFAULT_DIM)
  const frameRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const shuffle = useCallback(() => {
    setStill((current) => pickStill(current))
  }, [])

  const setDimFromClientY = useCallback((clientY: number) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    const y = clientY - rect.top
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
          <img
            className="screen__photo"
            src={still}
            alt="Sample streaming scene"
            draggable={false}
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
