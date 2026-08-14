import { Link } from 'react-router-dom'
import { cinema1, cinema2, cinema3, icon, movie1, movie2, movie3 } from '../assets/images'
import {
  ProductAdjustShot,
  ProductAppScreenshot,
  ProductNotificationShot,
} from '../components/ProductShots'
import { PlayStoreBadge } from '../components/PlayStoreBadge'
import { ShadePreview } from '../components/ShadePreview'
import './HomePage.css'

const ACTS = [
  {
    act: 'I',
    title: 'Grant the overlay',
    text: 'One permission. CineShade sits above your player like a lens cap you control.',
  },
  {
    act: 'II',
    title: 'Set the shade',
    text: 'Dial darkness until the picture feels right â€” without touching the appâ€™s brightness lock.',
  },
  {
    act: 'III',
    title: 'Watch',
    text: 'Every tap passes through. Only the image softens. Controls stay yours.',
  },
] as const

const STREAMING_APPS = [
  { name: 'Netflix', image: cinema1 },
  { name: 'YouTube', image: cinema2 },
  { name: 'Disney+', image: cinema3 },
  { name: 'Prime Video', image: movie1 },
  { name: 'HBO Max', image: movie2 },
  { name: 'Crunchyroll', image: movie3 },
] as const

const APP_SHOTS = [
  {
    step: '01',
    shot: 'app' as const,
    title: 'Set your shade',
    text: 'Real CineShade app â€” preview darkness, then tap Arm dimmer for other apps.',
  },
  {
    step: '02',
    shot: 'adjust' as const,
    title: 'Adjust over your stream',
    text: 'Exact adjust panel from the app â€” opens when you tap the CineShade notification.',
  },
  {
    step: '03',
    shot: 'notif' as const,
    title: 'Control from notifications',
    text: 'Same notification text and actions as the live app: Adjust or Turn off.',
  },
]

export function HomePage() {
  return (
    <div className="cinema">
      <div className="cinema__grain" aria-hidden="true" />
      <div className="cinema__vignette" aria-hidden="true" />

      <header className="cinema__nav">
        <Link to="/" className="cinema__logo">
          <img src={icon} alt="" width={30} height={30} />
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
            screen â€” so late-night watching stays easy on your eyes.
          </p>
        </div>

        <div id="preview">
          <ShadePreview />
        </div>

        <div className="auditorium__cta">
          <PlayStoreBadge size="large" />
          <p className="auditorium__note">No account Â· Local only Â· Android</p>
        </div>
      </main>

      <section className="streaming" id="streaming">
        <div className="streaming__head">
          <p className="streaming__kicker">Works everywhere you watch</p>
          <h2>Any streaming app. One dimmer.</h2>
          <p className="streaming__lead">
            CineShade sits on top of whatever is playing â€” Netflix, YouTube, Disney+, Prime Video,
            and anything else that locks system brightness.
          </p>
        </div>

        <ul className="streaming__grid">
          {STREAMING_APPS.map(({ name, image }) => (
            <li key={name} className="streaming__card">
              <img src={image} alt="" loading="lazy" />
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
          <p className="showcase__lead">Real app screenshot plus UI taken directly from the shipping product.</p>
        </div>
        <ul className="showcase__grid">
          {APP_SHOTS.map(({ step, shot, title, text }) => (
            <li key={step} className="showcase__item">
              <div className="showcase__card">
                <span className="showcase__step">{step}</span>
                <div className="showcase__frame">
                  {shot === 'app' && <ProductAppScreenshot />}
                  {shot === 'adjust' && <ProductAdjustShot />}
                  {shot === 'notif' && <ProductNotificationShot />}
                </div>
                <div className="showcase__copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
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
            <img src={icon} alt="" width={22} height={22} />
            CineShade
          </div>
          <p>Touch-through overlay dimmer for Android</p>
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </footer>
    </div>
  )
}

