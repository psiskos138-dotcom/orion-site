import Link from 'next/link'
import './not-found.css'

export default function NotFound() {
  return (
    <div className="nf-doc">
      <header className="nf-header">
        <span className="nf-ref">Orion Trade &amp; Logistics LLC</span>
        <span className="nf-status">Error&nbsp;·&nbsp;404</span>
      </header>

      <div className="nf-lockup" aria-hidden="true">
        <div className="nf-rs-1" />
        <div className="nf-rs-2" />
        <div className="nf-rs-3" />
        <div className="nf-number">404</div>
        <div className="nf-rule" />
      </div>

      <main className="nf-body">
        <p className="nf-message">
          The page you requested could not be located.
        </p>
        <Link href="/" className="nf-link">Return to homepage</Link>
      </main>

      <footer className="nf-colophon">
        <span className="nf-col-l">otlnyc.com</span>
        <span className="nf-col-r">New York</span>
      </footer>
    </div>
  )
}
