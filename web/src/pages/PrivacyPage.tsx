import { Link } from 'react-router-dom'
import {
  PRIVACY_LAST_UPDATED,
  PRIVACY_PACKAGE,
  PRIVACY_PLAY_URL,
  PRIVACY_PUBLIC_URL,
  PRIVACY_SITE_URL,
} from '../content/privacyPolicy'
import { assetUrl } from '../lib/assetUrl'
import './PrivacyPage.css'

export function PrivacyPage() {
  return (
    <div className="privacy">
      <header className="privacy__nav">
        <Link to="/" className="privacy__mark">
          <img src={assetUrl('icon.png')} alt="" width={28} height={28} />
          CineShade
        </Link>
        <nav className="privacy__links">
          <Link to="/how-to">How to</Link>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <article className="privacy__doc">
        <p className="privacy__kicker">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="privacy__meta">Last updated: {PRIVACY_LAST_UPDATED}</p>

        <p className="privacy__summary">
          <strong>Summary:</strong> CineShade does not collect, sell, or share your personal
          information. A few dimmer settings are stored only on your device. The app works offline
          and does not require an account.
        </p>

        <h2>About CineShade</h2>
        <p>
          CineShade (“the app”, “we”, “our”) is a local screen-dimming utility for Android, published
          as <code>{PRIVACY_PACKAGE}</code>. It draws a touch-through overlay so you can darken
          video and streaming apps when system brightness is locked by another app.
        </p>
        <p>
          While the dimmer is armed, the app may run a foreground service and show a notification so
          you can adjust darkness or turn the overlay off.
        </p>

        <h2>Information we collect</h2>
        <p>
          <strong>We do not collect personal information.</strong> CineShade has no backend
          servers, no user accounts, and no analytics or advertising SDKs. We do not receive your
          name, email, location, contacts, photos, or usage analytics.
        </p>
        <ul>
          <li>No account or login</li>
          <li>No analytics, crash reporting, or advertising networks</li>
          <li>No location tracking</li>
          <li>No data sold or shared with third parties for marketing</li>
        </ul>

        <h2>Information stored on your device</h2>
        <p>
          To remember your preferences between sessions, the app stores a small amount of data{' '}
          <strong>locally on your phone only</strong>:
        </p>
        <ul>
          <li>
            <strong>Dimmer intensity</strong> — your chosen darkness level (a number between 0 and
            100%)
          </li>
          <li>
            <strong>Armed state</strong> — whether you last turned the dimmer on for other apps
          </li>
        </ul>
        <p>
          This data stays in the app&apos;s private storage (Android SharedPreferences and local app
          storage). It is not uploaded, synced to the cloud, or transmitted to us or anyone else.
        </p>
        <p>
          You can remove this data by clearing the app&apos;s storage in Android Settings or by
          uninstalling CineShade.
        </p>

        <h2>Permissions</h2>
        <p>CineShade requests only what it needs to provide the dimmer:</p>
        <ul>
          <li>
            <strong>Display over other apps</strong> (<code>SYSTEM_ALERT_WINDOW</code>) — draws the
            dim overlay above streaming and video apps. Required for the core feature.
          </li>
          <li>
            <strong>Notifications</strong> (<code>POST_NOTIFICATIONS</code>) — shows a persistent
            notification while the dimmer is armed so you can open the adjust panel or turn it off.
          </li>
          <li>
            <strong>Foreground service</strong> (<code>FOREGROUND_SERVICE</code>,{' '}
            <code>FOREGROUND_SERVICE_SPECIAL_USE</code>) — keeps the overlay running reliably while
            you use other apps. Android requires a visible notification for this type of service.
          </li>
          <li>
            <strong>Internet</strong> — may appear in the manifest because of the app framework
            (Expo/React Native). CineShade does not use network access to collect or send personal
            data.
          </li>
        </ul>

        <h2>Third-party services</h2>
        <p>
          CineShade does not integrate third-party analytics, advertising, social login, or cloud
          storage services. Your watching activity in other apps is not read, recorded, or sent
          anywhere by CineShade.
        </p>

        <h2>Google Play data safety</h2>
        <p>For Google Play&apos;s Data safety section, this app:</p>
        <ul>
          <li>
            <strong>Does not collect or share</strong> user data with the developer or third parties
          </li>
          <li>
            <strong>Does not require</strong> data encryption in transit (no personal data is
            transmitted)
          </li>
          <li>
            <strong>Does not contain ads</strong>
          </li>
          <li>
            Optional on-device preferences (dimmer level) can be deleted by the user via app settings
            or uninstall
          </li>
        </ul>

        <h2>Children&apos;s privacy</h2>
        <p>
          CineShade is not directed at children under 13. We do not knowingly collect personal
          information from children. The app is intended as a general utility for adjusting screen
          brightness while watching content.
        </p>

        <h2>Security</h2>
        <p>
          Because no personal data is collected or transmitted, there is no remote database of user
          information to secure. Local preference data is protected by Android&apos;s standard app
          sandbox — only CineShade can access its own storage on your device.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>Deny overlay permission — the dimmer cannot run over other apps</li>
          <li>Deny notifications — you may lose quick access to adjust or turn off the dimmer</li>
          <li>Turn the dimmer off at any time from the notification or inside the app</li>
          <li>Uninstall the app to remove all locally stored preferences</li>
        </ul>

        <h2>Changes to this policy</h2>
        <p>
          We may update this privacy policy from time to time. The &quot;Last updated&quot; date at
          the top of this page will change when we do. Continued use of the app after changes means
          you accept the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy questions about CineShade, contact the developer through the{' '}
          <a href={PRIVACY_PLAY_URL} target="_blank" rel="noopener noreferrer">
            Google Play store listing
          </a>{' '}
          for this app.
        </p>
        <p className="privacy__url">
          Site: <a href={PRIVACY_SITE_URL}>{PRIVACY_SITE_URL}</a>
          <br />
          Public policy URL: <a href={PRIVACY_PUBLIC_URL}>{PRIVACY_PUBLIC_URL}</a>
        </p>
      </article>
    </div>
  )
}
