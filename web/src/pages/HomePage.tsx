import { Link } from 'react-router-dom'
import { useState } from 'react'
import './HomePage.css'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.cineshade.app'

export function HomePage() {
  const [dim, setDim] = useState(0.42)

  return (
    <div className="home">
      <div className="home__glow" aria-hidden="true" />
      <div className="home__noise" aria-hidden="true" />

      <header className="top">
        <Link to="/" className="top__brand">
          <img src={`${import.meta.env.BASE_URL}icon.png`} alt="" width={28} height={28} />
          <span>CineShade</span>
        </Link>
        <nav className="top__nav">
          <Link to="/privacy">Privacy</Link>
          <a className="top__cta" href={PLAY_URL}>
            Get the app
          </a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero__copy">
          <p className="hero__eyebrow">Android screen dimmer</p>
          <h1 className="hero__brand">CineShade</h1>
          <p className="hero__headline">Dim streaming apps when brightness won’t listen.</p>
          <p className="hero__support">
            A touch-through shade that sits over players locking their own light — so late-night
            watching stays easy on your eyes.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={PLAY_URL}>
              Get it on Google Play
            </a>
            <a className="btn btn--ghost" href="#how">
              How it works
            </a>
          </div>
        </div>

        <aside className="demo" aria-label="Dimmer preview">
          <div className="demo__frame">
            <div className="demo__scene">
              <div className="demo__poster" />
              <div className="demo__meta">
                <span>Now playing</span>
                <strong>Night stream</strong>
              </div>
              <div className="demo__veil" style={{ opacity: dim * 0.92 }} />
            </div>
            <label className="demo__control">
              <span>Darkness · {Math.round(dim * 100)}%</span>
              <input
                type="range"
                min={0.05}
                max={1}
                step={0.01}
                value={dim}
                onChange={(e) => setDim(Number(e.target.value))}
              />
            </label>
          </div>
        </aside>
      </main>

      <section className="how" id="how">
        <h2>How it works</h2>
        <ol>
          <li>
            <strong>Allow overlay</strong>
            <span>Grant display over other apps once.</span>
          </li>
          <li>
            <strong>Set the shade</strong>
            <span>Dial darkness to what feels right.</span>
          </li>
          <li>
            <strong>Open your player</strong>
            <span>Touches still work — only the picture softens.</span>
          </li>
        </ol>
      </section>

      <footer className="foot">
        <p>Android · No account · Local dimmer</p>
        <Link to="/privacy">Privacy policy</Link>
      </footer>
    </div>
  )
}
