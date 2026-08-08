import { Link } from 'react-router-dom'
import { ShadePreview } from '../components/ShadePreview'
import './HomePage.css'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.cineshade.app'
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
    src: 'cta/play-screenshot-1-main.png',
    title: 'Set your shade',
    text: 'Preview darkness on a sample still before you arm the dimmer.',
  },
  {
    src: 'cta/play-screenshot-2-armed.png',
    title: 'Arm and go',
    text: 'Overlay kicks in when you switch to your streaming app.',
  },
  {
    src: 'cta/play-screenshot-3-usecase.png',
    title: 'Adjust anytime',
    text: 'Pull down notifications to tweak darkness without leaving the player.',
  },
] as const

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
          <a href="#streaming">Streaming apps</a>
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

        <div id="preview">
          <ShadePreview />
        </div>

        <div className="auditorium__cta">
          <a className="btn-marquee" href={PLAY_URL}>
            Get it on Google Play
          </a>
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
          <a className="btn-marquee btn-marquee--solid" href={PLAY_URL}>
            Works with any streaming app
          </a>
        </div>
      </section>

      <section className="showcase" id="app">
        <div className="showcase__head">
          <p className="showcase__kicker">On your phone</p>
          <h2>Arm, stream, adjust</h2>
        </div>
        <ul className="showcase__grid">
          {APP_SHOTS.map(({ src, title, text }) => (
            <li key={src} className="showcase__item">
              <div className="showcase__frame">
                <img src={`${BASE}${src}`} alt={title} loading="lazy" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
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
