import type { ReactNode } from 'react'
import { movie2, step1App } from '../assets/images'
import './ProductShots.css'

/** Fixed 45% â€” static capture of DimmerAdjustActivity at default intensity. */
const DEMO_PERCENT = 45

type ProductPhoneProps = {
  children: ReactNode
  className?: string
}

export function ProductPhone({ children, className = '' }: ProductPhoneProps) {
  return (
    <div className={`product-phone ${className}`.trim()}>
      <div className="product-phone__screen">{children}</div>
    </div>
  )
}

/** Step 2: stream + overlay + exact adjust panel from activity_dimmer_adjust.xml */
export function ProductAdjustShot() {
  const fill = `${DEMO_PERCENT}%`

  return (
    <ProductPhone>
      <img className="product-shot__stream" src={movie2} alt="" />
      <div
        className="product-shot__overlay"
        style={{ opacity: (DEMO_PERCENT / 100) * 0.98 }}
        aria-hidden="true"
      />
      <div className="product-shot__scrim" aria-hidden="true" />
      <div className="product-shot__panel">
        <p className="product-shot__brand">CineShade</p>
        <p className="product-shot__sub">Drag the slider â€” tap outside when done</p>
        <p className="product-shot__percent">{DEMO_PERCENT}%</p>
        <div className="product-shot__track" aria-hidden="true">
          <div className="product-shot__track-fill" style={{ width: fill }} />
          <div className="product-shot__track-thumb" style={{ left: fill }} />
        </div>
        <div className="product-shot__row">
          <span>Darker</span>
          <span>Lighter</span>
        </div>
        <span className="product-shot__done">Done</span>
      </div>
    </ProductPhone>
  )
}

/** Step 3: exact notification copy from ScreenDimmerService.buildNotification() */
export function ProductNotificationShot() {
  return (
    <ProductPhone className="product-phone--notif">
      <img className="product-shot__stream product-shot__stream--dim" src={movie2} alt="" />
      <div className="product-shot__overlay" style={{ opacity: 0.44 }} aria-hidden="true" />
      <div className="product-shot__shade-drawer" aria-hidden="true">
        <div className="product-shot__shade-handle" />
        <div className="product-shot__notif-card">
          <div className="product-shot__notif-icon" aria-hidden="true" />
          <div className="product-shot__notif-body">
            <strong>CineShade Â· {DEMO_PERCENT}% dark</strong>
            <span>Tap to open slider</span>
          </div>
        </div>
        <div className="product-shot__notif-actions">
          <span>Adjust</span>
          <span>Turn off</span>
        </div>
      </div>
    </ProductPhone>
  )
}

export function ProductAppScreenshot() {
  return (
    <ProductPhone>
      <img
        className="product-shot__app"
        src={step1App}
        alt="CineShade app home screen"
      />
    </ProductPhone>
  )
}

