import type { Metadata } from 'next';
import '../ops.css';

export const metadata: Metadata = {
  title: 'Sourcing & Delivery — Orion Trade & Logistics LLC',
  description: 'We go to the source. Our representatives operate on the ground in the markets we trade — building relationships directly with producers, understanding the supply before we commit to it.',
};

export default function SourcingPage() {
  return (
    <div className="ops-doc">
      <header className="ops-header">
        <a href="/" className="ops-back">
          Physical commodity trading<br />
          New York &nbsp;·&nbsp; Principal. Not broker.
        </a>
        <div className="ops-section-ref">
          Operations<br />
          § 1 &nbsp;·&nbsp; Sourcing
        </div>
      </header>

      <div className="ops-lockup">
        <div className="ops-rs-1" aria-hidden="true" />
        <div className="ops-rs-2" aria-hidden="true" />
        <div className="ops-rs-3" aria-hidden="true" />
        <span className="ops-wordmark">ORION</span>
        <div className="ops-sub-row">
          <span className="ops-sub-tl">Operations</span>
          <span className="ops-sub-section">§ 1</span>
        </div>
        <div className="ops-lockup-rule" aria-hidden="true" />
      </div>

      <main className="ops-body">
        <div className="ops-provision">
          <div className="ops-prov-num">§ 1.</div>
          <div>
            <h1 className="ops-heading">Sourcing &amp; Delivery</h1>
            <p className="ops-text">
              We go to the source. Our representatives operate on the ground in the
              markets we trade — building relationships directly with producers,
              understanding the supply before we commit to it. Every transaction
              begins with presence, not a phone call.
            </p>
          </div>
        </div>
      </main>

      <footer className="ops-colophon">
        <span className="ops-col-l">Orion Trade &amp; Logistics LLC</span>
        <span className="ops-col-r">New York</span>
      </footer>
    </div>
  );
}
