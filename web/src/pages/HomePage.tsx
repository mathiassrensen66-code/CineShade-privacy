import { Link } from 'react-router-dom'
import { InStreamDemo } from '../components/InStreamDemo'
import { PlayStoreBadge } from '../components/PlayStoreBadge'
import './HomePage.css'

const BASE = import.meta.env.BASE_URL

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

const STREAMING_APPS = [
  { name: 'Netflix', image: 'preview/cinema-1.jpg' },
  { name: 'YouTube', image: 'preview/cinema-2.jpg' },
  { name: 'Disney+', image: 'preview/cinema-3.jpg' },
  { name: 'Prime Video', image: 'preview/movie-1.jpg' },
  { name: 'HBO Max', image: 'preview/movie-2.jpg' },
  { name: 'Crunchyroll', image: 'preview/movie-3.jpg' },
] as const

const APP_SHOTS = [
  {
    kind: 'image' as const,
    src: 'cta/play-screenshot-1-main.png',
    title: 'Set your shade',
    text: 'Preview darkness in CineShade, then arm the dimmer before you open a stream.',
  },
  {
    kind: 'demo' as const,
    title: 'Adjust while you stream',
    text: 'Tap the CineShade notification — this bottom panel opens over Netflix, YouTube, and more.',
  },
  {
    kind: 'notif' as const,
    title: 'Notification stays ready',
    text: 'Pull down the shade anytime to reopen the slider. Touches still pass through to the player.',
  },
]

export function HomePage() {
  return (
    <div className="cinema">
      <div className="cinema__grain" aria-hidden="true" />
      <div className="cinema__vignette" aria-hidden="true" />

      <header className="cinema__nav">
        <Link to="/" className="cinema__logo">
          <img src={`${BASE}icon.png`} alt="" width={30} height={30} />
          <span>CineShade</span>
        </Link>
        <nav className="cinema__links">
          <a href="#preview">Try it</a>
          <Link to="/how-to" className="cinema__link-keep">How to</Link>
          <a href="#streaming">Streaming apps</a>
          <Link to="/privacy">Privacy</Link>
          <PlayStoreBadge size="nav" />
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

        <div id="preview">
          <InStreamDemo />
        </div>

        <div className="auditorium__cta">
          <PlayStoreBadge size="large" />
          <p className="auditorium__note">No account · Local only · Android</p>
        </div>
      </main>

      <section className="streaming" id="streaming">
        <div className="streaming__head">
          <p className="streaming__kicker">Works everywhere you watch</p>
          <h2>Any streaming app. One dimmer.</h2>
          <p className="streaming__lead">
            CineShade sits on top of whatever is playing — Netflix, YouTube, Disney+, Prime Video,
            and anything else that locks system brightness.
          </p>
        </div>

        <ul className="streaming__grid">
          {STREAMING_APPS.map(({ name, image }) => (
            <li key={name} className="streaming__card">
              <img src={`${BASE}${image}`} alt="" loading="lazy" />
              <div className="streaming__card-veil" aria-hidden="true" />
              <span className="streaming__card-name">{name}</span>
            </li>
          ))}
        </ul>

        <div className="streaming__cta">
          <p className="streaming__cta-text">Works with any streaming app</p>
          <PlayStoreBadge size="large" />
        </div>
      </section>

      <section className="showcase" id="app">
        <div className="showcase__head">
          <p className="showcase__kicker">On your phone</p>
          <h2>Arm, stream, adjust</h2>
        </div>
        <ul className="showcase__grid">
          {APP_SHOTS.map((item) => (
            <li key={item.title} className="showcase__item">
              <div className={`showcase__frame${item.kind === 'demo' ? ' showcase__frame--demo' : ''}`}>
                {item.kind === 'image' && (
                  <img src={`${BASE}${item.src}`} alt={item.title} loading="lazy" />
                )}
                {item.kind === 'demo' && <InStreamDemo compact />}
                {item.kind === 'notif' && (
                  <div className="showcase__notif" aria-hidden="true">
                    <div className="showcase__notif-bar">
                      <span className="showcase__notif-icon">◐</span>
                      <div>
                        <strong>CineShade · 52% dark</strong>
                        <p>Tap to open slider</p>
                      </div>
                    </div>
                    <div className="showcase__notif-actions">
                      <span>Adjust</span>
                      <span>Turn off</span>
                    </div>
                    <p className="showcase__notif-hint">Shown while the dimmer is armed</p>
                  </div>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

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
        <div className="acts__cta">
          <PlayStoreBadge size="default" />
        </div>
      </section>

      <footer className="credits">
        <div className="credits__row">
          <div className="credits__brand">
            <img src={`${BASE}icon.png`} alt="" width={22} height={22} />
            CineShade
          </div>
          <p>Touch-through overlay dimmer for Android</p>
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </footer>
    </div>
  )
}
