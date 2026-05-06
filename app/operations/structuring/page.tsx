import type { Metadata } from 'next';
import '../ops.css';

export const metadata: Metadata = {
  title: 'Structuring & Execution — Orion Trade & Logistics LLC',
  description: 'Each engagement is structured around the parties and the conditions on the ground. Counterparties are reviewed — KYC, documentation, and commercial capacity — before anything proceeds.',
};

export default function StructuringPage() {
  return (
    <div className="ops-doc">
      <header className="ops-header">
        <a href="/" className="ops-back">← Overview</a>
      </header>

      <main className="ops-body">
        <div className="ops-provision">
          <div className="ops-prov-num">§ 3.</div>
          <div>
            <h1 className="ops-heading">Structuring &amp; Execution</h1>
            <p className="ops-text">
              Each engagement is structured around the parties and the
              conditions on the ground. Counterparties are reviewed — KYC,
              documentation, and commercial capacity — before anything
              proceeds.
            </p>
            <p className="ops-text">
              We work with producers, aggregators, refineries, and
              institutional buyers. We do not enter transactions we
              cannot close.
            </p>
            <p className="ops-text">
              We proceed selectively.
            </p>
          </div>
        </div>
      </main>

      <nav className="ops-bottom-nav">
        <a href="/operations/compliance" className="ops-back">← §2 Mandate &amp; Standards</a>
        <a href="/contact" className="ops-back">Inquire →</a>
      </nav>

      <footer className="ops-colophon">
        <span className="ops-col-l">Orion Trade &amp; Logistics LLC</span>
        <span className="ops-col-r">New York</span>
      </footer>
    </div>
  );
}
