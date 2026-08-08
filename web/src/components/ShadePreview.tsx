import { useCallback, useState } from 'react'
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

function pickStill(exclude?: PreviewStill): PreviewStill {
  const pool = exclude ? PREVIEW_STILLS.filter((s) => s !== exclude) : PREVIEW_STILLS
  return pool[Math.floor(Math.random() * pool.length)]
}

export function ShadePreview() {
  const [still, setStill] = useState<PreviewStill>(PREVIEW_STILLS[0])
  const [dim, setDim] = useState(0.52)
  const [loaded, setLoaded] = useState(false)

  const shuffle = useCallback(() => {
    setLoaded(false)
    setStill((current) => pickStill(current))
  }, [])

  const shadeOpacity = dim * MAX_SHADE

  return (
    <div className="shade-preview" aria-label="Interactive dimmer preview">
      <div className="shade-preview__head">
        <p className="shade-preview__hint">Drag the slider — see the shade on a real still</p>
        <button type="button" className="shade-preview__shuffle" onClick={shuffle}>
          Shuffle scene
        </button>
      </div>

      <div className="letterbox letterbox--top" aria-hidden="true" />
      <div className="screen">
        <div className="screen__picture">
          {!loaded && (
            <div className="screen__loading" aria-hidden="true">
              Loading preview…
            </div>
          )}
          <img
            className="screen__photo"
            src={`${BASE}${still}`}
            alt="Sample streaming scene"
            onLoad={() => setLoaded(true)}
          />
          <div className="screen__haze" aria-hidden="true" />
          <div className="screen__meta">
            <span>Try the shade</span>
            <strong>Sample stream</strong>
          </div>
          <div className="screen__badge">{Math.round(dim * 100)}% dark</div>
          <div className="screen__shade" style={{ opacity: shadeOpacity }} aria-hidden="true" />
        </div>
        <div className="screen__beam" aria-hidden="true" />
      </div>
      <div className="letterbox letterbox--bottom" aria-hidden="true" />

      <label className="fader">
        <span className="fader__label">House lights</span>
        <span className="fader__value">{Math.round(dim * 100)}%</span>
        <input
          type="range"
          min={0.05}
          max={0.95}
          step={0.01}
          value={dim}
          onChange={(e) => setDim(Number(e.target.value))}
          aria-label="Adjust screen shade"
        />
      </label>
    </div>
  )
}
