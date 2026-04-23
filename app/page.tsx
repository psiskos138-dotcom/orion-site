'use client';

import { useEffect } from 'react';

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
      <div id="curtain" className="curtain" />
      <div className="doc">

        <header id="doc-header" className="doc-header">
          <div className="doc-ref">
            Physical commodity trading<br />
            New York &nbsp;·&nbsp; Principal. Not broker.
          </div>
          <div className="doc-status">
            US-governed<br />
            <span className="live">OFAC aligned</span>
          </div>
        </header>

        <div className="lockup-wrap">
          <div className="rs-1" />
          <div className="rs-2" id="rs2" />
          <div className="rs-3" id="rs3" />
          <span className="wordmark" id="wordmark">ORION</span>
          <div className="sub-row" id="sub-row">
            <span className="sub-tl">Trade &amp; Logistics</span>
            <span className="sub-llc" id="sub-llc">LLC &nbsp;·&nbsp; New York</span>
          </div>
          <div className="lockup-rule" id="lockup-rule" />
        </div>

        <div className="provisions" id="provisions">
          <div className="provision">
            <div className="prov-num">§ 1.</div>
            <div className="prov-body">
              We source, structure, and deliver physical commodities
              from origin to destination — as principal, on every deal.
            </div>
          </div>
          <div className="provision">
            <div className="prov-num">§ 2.</div>
            <div className="prov-body">
              We are not a broker. We do not split exposure.{' '}
              <em>Patience. Discretion. Execution.</em> These are not
              aspirations — they are the minimum standard by which{' '}
              <span className="dt">The Firm</span> operates in every
              market it enters.
            </div>
          </div>
          <div className="provision">
            <div className="prov-num">§ 3.</div>
            <div className="prov-body">
              Our model is built on direct relationships — on-the-ground
              at origin, controlled in-house through documentation and
              structuring, clean at settlement.{' '}
              <span className="dt">US-governed. OFAC aligned.</span>{' '}
              New York LLC.
            </div>
          </div>
        </div>

        <div className="execution" id="execution">
          <div className="exec-label">Enquiries</div>
          <div>
            <a className="exec-email" href="mailto:info@otlnyc.com">
              info@otlnyc.com
            </a>
          </div>
        </div>

        <footer className="colophon" id="colophon">
          <span className="col-l">Orion Trade &amp; Logistics LLC</span>
          <span className="col-r">New York</span>
        </footer>

      </div>
    </>
  );
}