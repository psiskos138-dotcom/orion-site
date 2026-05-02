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
        <a href="/" className="ops-back">← Overview</a>
      </header>

      <main className="ops-body">
        <div className="ops-provision">
          <div className="ops-prov-num">§ 1.</div>
          <div>
            <h1 className="ops-heading">Sourcing &amp; Delivery</h1>
            <p className="ops-text">
              We operate at origin. Before committing to any transaction, we
              establish direct contact with producers and aggregators —
              verifying supply, understanding the underlying flow, and
              assessing conditions on the ground.
            </p>
            <p className="ops-text">
              We do not rely on intermediary representations. Verification is
              conducted independently.
            </p>
            <p className="ops-text">
              From origin through final delivery, movement and documentation
              are controlled in-house. Settlement is clean.
            </p>
          </div>
        </div>
      </main>

      <nav className="ops-bottom-nav">
        <a href="/" className="ops-back">← Overview</a>
        <a href="/operations/compliance" className="ops-back">§2 Due Diligence &amp; Compliance →</a>
      </nav>

      <footer className="ops-colophon">
        <span className="ops-col-l">Orion Trade &amp; Logistics LLC</span>
        <span className="ops-col-r">New York</span>
      </footer>
    </div>
  );
}
