import { Link } from 'react-router-dom'
import { PlayStoreBadge } from '../components/PlayStoreBadge'
import { icon } from '../assets/images'
import './HowToPage.css'

type Step = {
  n: number
  title: string
  body: string
  detail?: readonly string[]
}

const STEPS: readonly Step[] = [
  {
    n: 1,
    title: 'Install CineShade',
    body: 'Get the app from Google Play. No account needed â€” everything runs on your phone.',
  },
  {
    n: 2,
    title: 'Allow display over other apps',
    body: 'CineShade needs this once so it can draw the dim layer on top of Netflix, YouTube, and other apps.',
    detail: [
      'Open CineShade and tap Grant "display over other apps".',
      'On the system screen, find CineShade and turn on Allow display over other apps.',
      'If you do not see the prompt: Settings â†’ Apps â†’ CineShade â†’ Display over other apps â†’ Allow.',
    ],
  },
  {
    n: 3,
    title: 'Allow notifications (if asked)',
    body: 'Android may ask for notification permission. CineShade uses a small persistent notification while the dimmer is armed so you can adjust or turn it off quickly.',
  },
  {
    n: 4,
    title: 'Set darkness in the preview',
    body: 'Drag the preview slider until the sample image looks right. This is your starting shade level.',
  },
  {
    n: 5,
    title: 'Arm the dimmer',
    body: 'Tap Arm dimmer for other apps. The button turns green â€” CineShade is ready, but the overlay only appears after you leave the app.',
  },
  {
    n: 6,
    title: 'Open your streaming app',
    body: 'Switch to Netflix, YouTube, Disney+, Prime Video, or any app that locks brightness. The dim layer appears over the video automatically. Touches still pass through to the player.',
  },
  {
    n: 7,
    title: 'Adjust from the notification',
    body: 'Pull down notifications and tap the CineShade entry once. A slider panel opens at the bottom of the screen â€” the same UI as in the demo on our home page.',
    detail: [
      'Drag the slider, or tap Darker / Lighter.',
      'Tap Done to close the panel and keep watching.',
      'Tap Turn off in the notification to disable the dimmer completely.',
    ],
  },
]

export function HowToPage() {
  return (
    <div className="howto">
      <header className="howto__nav">
        <Link to="/" className="howto__mark">
          <img src={icon} alt="" width={28} height={28} />
          CineShade
        </Link>
        <nav className="howto__links">
          <Link to="/">Home</Link>
          <Link to="/privacy">Privacy</Link>
        </nav>
      </header>

      <article className="howto__doc">
        <p className="howto__kicker">Guide</p>
        <h1>How to use CineShade</h1>
        <p className="howto__lead">
          Set up permissions once, arm the dimmer, then watch anything with a touch-through shade
          you control.
        </p>

        <ol className="howto__steps">
          {STEPS.map(({ n, title, body, detail }) => (
            <li key={n}>
              <span className="howto__step-num">{n}</span>
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
                {detail && (
                  <ul>
                    {detail.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>

        <section className="howto__permissions">
          <h2>Why these permissions?</h2>
          <ul>
            <li>
              <strong>Display over other apps</strong> â€” draws the dim overlay above streaming
              players. Without it, CineShade cannot darken the picture.
            </li>
            <li>
              <strong>Notifications / foreground service</strong> â€” keeps the dimmer running in the
              background and gives you a quick way to adjust or turn off.
            </li>
          </ul>
          <p>
            CineShade does not collect personal data. See our{' '}
            <Link to="/privacy">privacy policy</Link> for details.
          </p>
        </section>

        <section className="howto__tips">
          <h2>Troubleshooting</h2>
          <ul>
            <li>
              <strong>Overlay does not appear</strong> â€” confirm display-over-other-apps is allowed,
              the dimmer is armed, and you have left CineShade for your streaming app.
            </li>
            <li>
              <strong>Screen is too dark or too bright</strong> â€” tap the CineShade notification to
              reopen the slider panel.
            </li>
            <li>
              <strong>Want to stop dimming</strong> â€” tap Turn off in the notification, or open
              CineShade and disarm the dimmer.
            </li>
          </ul>
        </section>

        <div className="howto__cta">
          <PlayStoreBadge size="large" />
        </div>
      </article>
    </div>
  )
}

