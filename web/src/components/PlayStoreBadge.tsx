import { assetUrl } from '../lib/assetUrl'
import './PlayStoreBadge.css'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.cineshade.app'
const BADGE = assetUrl('google-play-badge.png')

type PlayStoreBadgeProps = {
  size?: 'nav' | 'default' | 'large'
  className?: string
}

export function PlayStoreBadge({ size = 'default', className = '' }: PlayStoreBadgeProps) {
  return (
    <a
      className={`play-badge play-badge--${size} ${className}`.trim()}
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get CineShade on Google Play"
    >
      <img src={BADGE} alt="Get it on Google Play" width={646} height={250} />
    </a>
  )
}
