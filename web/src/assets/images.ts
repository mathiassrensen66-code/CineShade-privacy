import cinema1 from './preview/cinema-1.jpg'
import cinema2 from './preview/cinema-2.jpg'
import cinema3 from './preview/cinema-3.jpg'
import movie1 from './preview/movie-1.jpg'
import movie2 from './preview/movie-2.jpg'
import movie3 from './preview/movie-3.jpg'
import movie4 from './preview/movie-4.jpg'
import step1App from './showcase/step-1-app.png'
import icon from './icon.png'
import googlePlayBadge from './google-play-badge.png'

export {
  cinema1,
  cinema2,
  cinema3,
  movie1,
  movie2,
  movie3,
  movie4,
  step1App,
  icon,
  googlePlayBadge,
}

export const PREVIEW_STILL_URLS = [
  movie1,
  movie2,
  movie3,
  movie4,
  cinema1,
  cinema2,
  cinema3,
] as const

export type PreviewStillUrl = (typeof PREVIEW_STILL_URLS)[number]
