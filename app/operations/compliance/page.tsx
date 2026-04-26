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
              Our compliance framework adopts internationally recognized legal and
              regulatory standards and applies them across every transaction we
              undertake. We operate under US law and align with OFAC sanctions
              requirements on every deal regardless of origin or destination.
            </p>
            <p className="ops-text">
              Key areas of focus include anti-money laundering, prevention of
              bribery and corruption, trade and economic sanctions, and the
              verification of applicable licenses and documentation for all
              counterparties we engage.
            </p>
            <p className="ops-text">
              Every supplier and counterparty is subject to KYC review before a
              transaction proceeds. We apply a defined approach to due diligence
              across our supply chain — with particular attention to provenance,
              documentation integrity, and the identification of risk at origin.
            </p>
            <p className="ops-text">
              We do not proceed until we are satisfied.
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
