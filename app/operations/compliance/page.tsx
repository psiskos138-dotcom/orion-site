import type { Metadata } from 'next';
import '../ops.css';

export const metadata: Metadata = {
  title: 'Due Diligence & Compliance — Orion Trade & Logistics LLC',
  description: 'Every counterparty we engage is fully verified before a transaction moves forward. KYC is completed. Licenses are checked. Documentation is confirmed valid.',
};

export default function CompliancePage() {
  return (
    <div className="ops-doc">
      <header className="ops-header">
        <a href="/" className="ops-back">
          Physical commodity trading<br />
          New York &nbsp;·&nbsp; Principal. Not broker.
        </a>
        <div className="ops-section-ref">
          Operations<br />
          § 2 &nbsp;·&nbsp; Compliance
        </div>
      </header>

      <div className="ops-lockup">
        <div className="ops-rs-1" aria-hidden="true" />
        <div className="ops-rs-2" aria-hidden="true" />
        <div className="ops-rs-3" aria-hidden="true" />
        <span className="ops-wordmark">ORION</span>
        <div className="ops-sub-row">
          <span className="ops-sub-tl">Operations</span>
          <span className="ops-sub-section">§ 2</span>
        </div>
        <div className="ops-lockup-rule" aria-hidden="true" />
      </div>

      <main className="ops-body">
        <div className="ops-provision">
          <div className="ops-prov-num">§ 2.</div>
          <div>
            <h1 className="ops-heading">Due Diligence &amp; Compliance</h1>
            <p className="ops-text">
              Every counterparty we engage is fully verified before a transaction
              moves forward. KYC is completed. Licenses are checked. Documentation
              is confirmed valid. We govern ourselves to US standards on every deal
              regardless of where it originates — OFAC aligned, fully documented,
              no exceptions.
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
