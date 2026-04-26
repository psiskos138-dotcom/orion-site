import type { Metadata } from 'next';
import '../ops.css';

export const metadata: Metadata = {
  title: 'Structuring & Execution — Orion Trade & Logistics LLC',
  description: 'Every transaction we take on is different. We don\'t apply templates — we build each deal from scratch around the specific commodity, the parties involved, and the conditions on the ground.',
};

export default function StructuringPage() {
  return (
    <div className="ops-doc">
      <header className="ops-header">
        <a href="/" className="ops-back">
          Physical commodity trading<br />
          New York &nbsp;·&nbsp; Principal. Not broker.
        </a>
        <div className="ops-section-ref">
          Operations<br />
          § 3 &nbsp;·&nbsp; Structuring
        </div>
      </header>

      <div className="ops-lockup">
        <div className="ops-rs-1" aria-hidden="true" />
        <div className="ops-rs-2" aria-hidden="true" />
        <div className="ops-rs-3" aria-hidden="true" />
        <span className="ops-wordmark">ORION</span>
        <div className="ops-sub-row">
          <span className="ops-sub-tl">Operations</span>
          <span className="ops-sub-section">§ 3</span>
        </div>
        <div className="ops-lockup-rule" aria-hidden="true" />
      </div>

      <main className="ops-body">
        <div className="ops-provision">
          <div className="ops-prov-num">§ 3.</div>
          <div>
            <h1 className="ops-heading">Structuring &amp; Execution</h1>
            <p className="ops-text">
              Every deal we take on is unique. We build each one from scratch —
              structured around the parties involved and the conditions on the
              ground. The approach is always custom. The standards never are.
              We apply the same ethics, diligence, and discipline across
              everything we do, and we support positive outcomes for the
              communities we work in by ensuring every transaction is clean,
              documented, and properly settled.
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
