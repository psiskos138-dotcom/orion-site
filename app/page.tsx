'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import './page.css';

export default function Home() {
  useEffect(() => {
    const timers = [
      setTimeout(() => document.getElementById('wordmark')?.classList.add('show'), 300),
      setTimeout(() => {
        document.getElementById('rs2')?.classList.add('show');
        document.getElementById('rs3')?.classList.add('show');
      }, 900),
      setTimeout(() => document.getElementById('sub-row')?.classList.add('show'), 1500),
      setTimeout(() => {
        document.getElementById('sub-llc')?.classList.add('show');
        document.getElementById('lockup-rule')?.classList.add('show');
      }, 2100),
      setTimeout(() => {
        document.getElementById('curtain')?.classList.add('gone');
        document.getElementById('doc-header')?.classList.add('show');
        document.getElementById('provisions')?.classList.add('show');
        document.getElementById('execution')?.classList.add('show');
        document.getElementById('colophon')?.classList.add('show');
      }, 2700),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <div id="curtain" className="curtain" aria-hidden="true" />
      <main className="doc">

        <header id="doc-header" className="doc-header">
          <div className="doc-ref">
            Physical Metals Agency &nbsp;·&nbsp; New York
          </div>
          <div className="doc-status">
            US-Governed.
          </div>
        </header>

        <div className="lockup-wrap">
          <div className="rs-1" aria-hidden="true" />
          <div className="rs-2" id="rs2" aria-hidden="true" />
          <div className="rs-3" id="rs3" aria-hidden="true" />
          <span className="wordmark" id="wordmark">ORION</span>
          <div className="sub-row" id="sub-row">
            <span className="sub-llc" id="sub-llc">LLC &nbsp;·&nbsp; New York</span>
          </div>
          <div className="lockup-rule" id="lockup-rule" aria-hidden="true" />
        </div>

        <div className="provisions" id="provisions">
          <Link href="/operations/sourcing" className="provision">
            <div className="prov-num">§ 1.</div>
            <div className="prov-body">
              We represent buyers and suppliers of physical metals —
              acting under defined mandate to source, coordinate, and
              structure transactions from origin to closing.
            </div>
          </Link>
          <Link href="/operations/compliance" className="provision">
            <div className="prov-num">§ 2.</div>
            <div className="prov-body">
              Independent. Selective. We take on mandates we can
              execute, bring terms worth considering, and do not advance
              a deal we cannot close.
            </div>
          </Link>
          <Link href="/operations/structuring" className="provision">
            <div className="prov-num">§ 3.</div>
            <div className="prov-body">
              Our network spans producers, aggregators, refineries, and
              institutional buyers. Every engagement is reviewed for
              counterparty standing, transaction capacity, and documented
              commercial terms before we proceed.{' '}
              <span className="dt">US-Governed.</span>{' '}
              New York LLC.
            </div>
          </Link>
        </div>

        <div className="execution" id="execution">
          Qualified inquiries only.{' '}
          <a className="exec-link" href="/contact">Inquire →</a>
        </div><footer className="colophon" id="colophon">
          <span className="col-l">Orion Trade &amp; Logistics LLC</span>
          <span className="col-m">NY DOS &nbsp;·&nbsp; 7850574</span>
          <span className="col-r">New York</span>
        </footer>

      </main>
    </>
  );
}