import { useState } from 'react'
import { assetUrl } from '../lib/assetUrl'
import './InStreamDemo.css'

const STREAM_STILL = assetUrl('preview/movie-2.jpg')
const MAX_SHADE = 0.98

type InStreamDemoProps = {
  compact?: boolean
}

export function InStreamDemo({ compact = false }: InStreamDemoProps) {
  const [dim, setDim] = useState(0.52)
  const percent = Math.round(dim * 100)
  const shadeOpacity = dim * MAX_SHADE

  return (
    <div
      className={`in-stream${compact ? ' in-stream--compact' : ''}`}
      aria-label="Adjust CineShade while streaming"
    >
      {!compact && (
        <div className="in-stream__intro">
          <p className="in-stream__kicker">This is the real experience</p>
          <p className="in-stream__hint">
            Drag the slider in the panel — same UI you get when you tap the CineShade notification
            over Netflix, YouTube, or any streaming app.
          </p>
        </div>
      )}

      <div className="phone">
        <div className="phone__bezel">
          <div className="phone__screen">
            <div className="phone__status" aria-hidden="true">
              <span>10:42</span>
              <span className="phone__status-icons">▮▮▮ 🔋</span>
            </div>

            <div className="stream-player">
              <img className="stream-player__video" src={STREAM_STILL} alt="" />
              <div className="stream-player__shade" style={{ opacity: shadeOpacity }} aria-hidden="true" />

              <div className="stream-player__chrome" aria-hidden="true">
                <div className="stream-player__top">
                  <span className="stream-player__back">←</span>
                  <div>
                    <p className="stream-player__show">Sample series</p>
                    <p className="stream-player__episode">S1 · E3 — Late shift</p>
                  </div>
                </div>
                <div className="stream-player__progress">
                  <div className="stream-player__bar" style={{ width: '38%' }} />
                </div>
                <div className="stream-player__controls">
                  <span>⏪</span>
                  <span className="stream-player__play">▶</span>
                  <span>⏩</span>
                </div>
              </div>

              <div className="stream-player__notif" aria-hidden="true">
                CineShade · {percent}% dark · Tap to adjust
              </div>

              <div className="adjust-scrim" aria-hidden="true" />
              <div className="adjust-panel">
                <p className="adjust-panel__brand">CineShade</p>
                <p className="adjust-panel__sub">Drag the slider — tap outside when done</p>
                <p className="adjust-panel__percent">{percent}%</p>
                <label className="adjust-panel__slider">
                  <span className="visually-hidden">Adjust darkness</span>
                  <input
                    type="range"
                    min={0.05}
                    max={0.95}
                    step={0.01}
                    value={dim}
                    onChange={(e) => setDim(Number(e.target.value))}
                  />
                </label>
                <div className="adjust-panel__row">
                  <button type="button" onClick={() => setDim((v) => Math.min(0.95, v + 0.08))}>
                    Darker
                  </button>
                  <button type="button" onClick={() => setDim((v) => Math.max(0.05, v - 0.08))}>
                    Lighter
                  </button>
                </div>
                <button type="button" className="adjust-panel__done">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!compact && (
        <p className="in-stream__caption">
          Generic streaming player shown — CineShade works the same over any app.
        </p>
      )}
    </div>
  )
}
