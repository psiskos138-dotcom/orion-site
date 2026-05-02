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
        <a href="/" className="ops-back">← Overview</a>
      </header>

      <main className="ops-body">
        <div className="ops-provision">
          <div className="ops-prov-num">§ 2.</div>
          <div>
            <h1 className="ops-heading">Due Diligence &amp; Compliance</h1>
            <p className="ops-text">
              We operate under US law. OFAC sanctions requirements apply to
              every transaction, regardless of origin or destination.
            </p>
            <p className="ops-text">
              All counterparties — suppliers, aggregators, refineries, and
              buyers — are subject to KYC review prior to engagement.
              Licenses, documentation, and transaction history are verified
              before any deal proceeds.
            </p>
            <p className="ops-text">
              Areas of focus include anti-money laundering, sanctions
              compliance, and provenance verification at origin.
            </p>
            <p className="ops-text">
              We do not proceed until we are satisfied.
            </p>
          </div>
        </div>
      </main>

      <nav className="ops-bottom-nav">
        <a href="/operations/sourcing" className="ops-back">← §1 Sourcing &amp; Delivery</a>
        <a href="/operations/structuring" className="ops-back">§3 Structuring &amp; Execution →</a>
      </nav>

      <footer className="ops-colophon">
        <span className="ops-col-l">Orion Trade &amp; Logistics LLC</span>
        <span className="ops-col-r">New York</span>
      </footer>
    </div>
  );
}
