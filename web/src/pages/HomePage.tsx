import { Link } from 'react-router-dom'
import { useState } from 'react'
import './HomePage.css'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.cineshade.app'

const ACTS = [
  {
    act: 'I',
    title: 'Grant the overlay',
    text: 'One permission. CineShade sits above your player like a lens cap you control.',
  },
  {
    act: 'II',
    title: 'Set the shade',
    text: 'Dial darkness until the picture feels right — without touching the app’s brightness lock.',
  },
  {
    act: 'III',
    title: 'Watch',
    text: 'Every tap passes through. Only the image softens. Controls stay yours.',
  },
] as const

export function HomePage() {
  const [dim, setDim] = useState(0.52)

  return (
    <div className="cinema">
      <div className="cinema__grain" aria-hidden="true" />
      <div className="cinema__vignette" aria-hidden="true" />

      <header className="cinema__nav">
        <Link to="/" className="cinema__logo">
          <img src={`${import.meta.env.BASE_URL}icon.png`} alt="" width={30} height={30} />
          <span>CineShade</span>
        </Link>
        <nav className="cinema__links">
          <a href="#acts">The method</a>
          <Link to="/privacy">Privacy</Link>
          <a className="cinema__ticket" href={PLAY_URL}>
            Get the app
          </a>
        </nav>
      </header>

      <main className="auditorium">
        <div className="auditorium__intro">
          <p className="auditorium__kicker">Android screen shade</p>
          <h1 className="auditorium__title">
            <span>Dim the picture.</span>
            <span>Not the experience.</span>
          </h1>
          <p className="auditorium__tagline">
            When streaming apps lock brightness, CineShade draws a touch-through veil over the
            screen — so late-night watching stays easy on your eyes.
          </p>
        </div>

        <div className="screen-wrap" aria-label="Interactive dimmer preview">
          <div className="letterbox letterbox--top" aria-hidden="true" />
          <div className="screen">
            <div className="screen__picture">
              <div className="screen__scene" />
              <div className="screen__haze" />
              <div className="screen__meta">
                <span>Now playing</span>
                <strong>Midnight reel</strong>
              </div>
              <div className="screen__shade" style={{ opacity: dim }} />
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

        <div className="auditorium__cta">
          <a className="btn-marquee" href={PLAY_URL}>
            Get it on Google Play
          </a>
          <p className="auditorium__note">No account · Local only · Android</p>
        </div>
      </main>

      <section className="acts" id="acts">
        <div className="acts__head">
          <p className="acts__kicker">In three acts</p>
          <h2>How CineShade works</h2>
        </div>
        <ol className="acts__grid">
          {ACTS.map(({ act, title, text }) => (
            <li key={act}>
              <span className="acts__act">Act {act}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="credits">
        <div className="credits__row">
          <div className="credits__brand">
            <img src={`${import.meta.env.BASE_URL}icon.png`} alt="" width={22} height={22} />
            CineShade
          </div>
          <p>Touch-through overlay dimmer for Android</p>
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </footer>
    </div>
  )
}
