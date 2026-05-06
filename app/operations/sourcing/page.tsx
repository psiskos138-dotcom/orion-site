import type { Metadata } from 'next';
import '../ops.css';

export const metadata: Metadata = {
  title: 'Sourcing & Coordination — Orion Trade & Logistics LLC',
  description: 'We operate under mandate. Before engaging any transaction, we establish the terms of our representation — buyer-side, supplier-side, or both — and define the scope of our role before any counterparty contact is made.',
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
            <h1 className="ops-heading">Sourcing &amp; Coordination</h1>
            <p className="ops-text">
              We operate under mandate. Before engaging any transaction, we
              establish the terms of our representation — buyer-side,
              supplier-side, or both — and define the scope of our role
              before any counterparty contact is made.
            </p>
            <p className="ops-text">
              On the ground at origin, we establish direct contact with
              producers and aggregators, verifying supply and understanding
              the underlying flow before presenting anything to a buyer.
            </p>
            <p className="ops-text">
              We coordinate movement and documentation from origin through
              closing. We do not represent what we have not verified.
            </p>
          </div>
        </div>
      </main>

      <nav className="ops-bottom-nav">
        <a href="/" className="ops-back">← Overview</a>
        <a href="/operations/compliance" className="ops-back">§2 Mandate &amp; Standards →</a>
      </nav>

      <footer className="ops-colophon">
        <span className="ops-col-l">Orion Trade &amp; Logistics LLC</span>
        <span className="ops-col-r">New York</span>
      </footer>
    </div>
  );
}
