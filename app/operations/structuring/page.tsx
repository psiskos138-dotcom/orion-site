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
        <a href="/" className="ops-back">← Overview</a>
      </header>

      <main className="ops-body">
        <div className="ops-provision">
          <div className="ops-prov-num">§ 3.</div>
          <div>
            <h1 className="ops-heading">Structuring &amp; Execution</h1>
            <p className="ops-text">
              We take position. We do not intermediate.
            </p>
            <p className="ops-text">
              Each transaction is structured around the parties involved and
              the conditions on the ground. There is no standard template.
              What remains constant is the standard applied — consistent
              diligence, documentation, and settlement discipline across
              every deal.
            </p>
            <p className="ops-text">
              We engage with licensed producers, aggregators, refineries, and
              institutional end buyers. We do not participate in open-market
              brokerage or multi-party chains.
            </p>
            <p className="ops-text">
              We proceed selectively.
            </p>
          </div>
        </div>
      </main>

      <nav className="ops-bottom-nav">
        <a href="/operations/compliance" className="ops-back">← §2 Due Diligence &amp; Compliance</a>
        <a href="/contact" className="ops-back">Inquire →</a>
      </nav>

      <footer className="ops-colophon">
        <span className="ops-col-l">Orion Trade &amp; Logistics LLC</span>
        <span className="ops-col-r">New York</span>
      </footer>
    </div>
  );
}
