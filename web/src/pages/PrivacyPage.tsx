import { Link } from 'react-router-dom'
import './PrivacyPage.css'

export function PrivacyPage() {
  return (
    <div className="privacy">
      <header className="privacy__nav">
        <Link to="/" className="privacy__mark">
          <img src={`${import.meta.env.BASE_URL}icon.png`} alt="" width={28} height={28} />
          CineShade
        </Link>
        <Link to="/" className="privacy__back">
          Back to home
        </Link>
      </header>

      <article className="privacy__doc">
        <p className="privacy__kicker">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="privacy__meta">Last updated: August 7, 2026</p>

        <p>CineShade (“the app”) is a local screen-dimming utility for Android.</p>

        <h2>What the app does</h2>
        <p>
          CineShade draws a translucent overlay on your screen so you can darken content from other
          apps. It may run a foreground service and show a notification while the dimmer is active.
        </p>

        <h2>Data we collect</h2>
        <p>
          <strong>None.</strong> CineShade does not collect, store on our servers, sell, or share
          personal information.
        </p>
        <ul>
          <li>No account or login</li>
          <li>No analytics or advertising SDKs</li>
          <li>No location tracking</li>
          <li>Dimmer settings stay on your device only</li>
        </ul>

        <h2>Permissions</h2>
        <ul>
          <li>
            <strong>Display over other apps</strong> — required to show the dim overlay
          </li>
          <li>
            <strong>Notifications / foreground service</strong> — keeps the dimmer running and lets
            you turn it off
          </li>
          <li>
            <strong>Internet</strong> — may appear due to the app framework; CineShade does not use
            it to send personal data
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          For privacy questions, contact the developer through the Google Play store listing for
          CineShade.
        </p>
      </article>
    </div>
  )
}
