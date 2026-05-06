import type { Metadata } from 'next';
import '../ops.css';

export const metadata: Metadata = {
  title: 'Mandate & Standards — Orion Trade & Logistics LLC',
  description: 'We take on mandates selectively. Before accepting an engagement, we assess counterparty standing, transaction capacity, and whether the terms are executable in practice — not just on paper.',
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
            <h1 className="ops-heading">Mandate &amp; Standards</h1>
            <p className="ops-text">
              We take on mandates selectively. Before accepting an
              engagement, we assess counterparty standing, transaction
              capacity, and whether the terms are executable in practice
              — not just on paper.
            </p>
            <p className="ops-text">
              All counterparties are subject to review prior to engagement.
              We verify licenses, documentation, and transaction history
              before any deal moves forward.
            </p>
            <p className="ops-text">
              We bring terms worth considering. We do not advance a deal
              we cannot close.
            </p>
          </div>
        </div>
      </main>

      <nav className="ops-bottom-nav">
        <a href="/operations/sourcing" className="ops-back">← §1 Sourcing &amp; Coordination</a>
        <a href="/operations/structuring" className="ops-back">§3 Structuring &amp; Execution →</a>
      </nav>

      <footer className="ops-colophon">
        <span className="ops-col-l">Orion Trade &amp; Logistics LLC</span>
        <span className="ops-col-r">New York</span>
      </footer>
    </div>
  );
}
