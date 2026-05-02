'use client';

import { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [role, setRole] = useState('');
  const [commodity, setCommodity] = useState('');
  const [originLocation, setOriginLocation] = useState('');
  const [volume, setVolume] = useState('');
  const [overview, setOverview] = useState('');
  const [documentationAvailable, setDocumentationAvailable] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        companyName,
        contactName,
        email,
        whatsapp,
        role,
        commodity,
        originLocation,
        volume,
        overview,
        documentationAvailable,
      }),
    });
    if (res.ok) setStatus('sent');
    else setStatus('error');
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <a href="/" className="contact-back" aria-label="Return to Orion home">Orion</a>
        <span className="contact-title">Enquiries</span>
      </header>
      <main className="contact-wrap">
        <div className="contact-lockup">
          <div className="c-r1" aria-hidden="true" />
          <div className="c-r2" aria-hidden="true" />
          <div className="c-r3" aria-hidden="true" />
          <h1 className="contact-heading">Qualified Inquiries Only</h1>
          <p className="contact-subheading">Direct counterparties only.</p>
          <div className="c-rule" aria-hidden="true" />
        </div>
        {status === 'sent' ? (
          <div className="contact-sent">
            <p>Submission received. If aligned, we will respond.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <label className="form-label" htmlFor="companyName">Company Name</label>
              <input id="companyName" type="text" required className="form-input" value={companyName} onChange={e => setCompanyName(e.target.value)} />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="contactName">Contact Name</label>
              <input id="contactName" type="text" required className="form-input" value={contactName} onChange={e => setContactName(e.target.value)} />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="email">Email</label>
              <input id="email" type="email" required className="form-input" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="whatsapp">WhatsApp (optional)</label>
              <input id="whatsapp" type="text" className="form-input" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
            </div>
            <div className="form-row">
              <span className="form-label">You are</span>
              <div className="form-radio-group" role="radiogroup" aria-label="You are">
                {['Supplier', 'Buyer or Refinery', 'Other'].map(opt => (
                  <label key={opt} className="form-radio-option">
                    <input
                      type="radio"
                      name="role"
                      value={opt}
                      required
                      checked={role === opt}
                      onChange={e => setRole(e.target.value)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="commodity">Commodity</label>
              <input id="commodity" type="text" required className="form-input" value={commodity} onChange={e => setCommodity(e.target.value)} />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="originLocation">Origin / Location</label>
              <input id="originLocation" type="text" required className="form-input" value={originLocation} onChange={e => setOriginLocation(e.target.value)} />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="volume">Volume</label>
              <input id="volume" type="text" required className="form-input" value={volume} onChange={e => setVolume(e.target.value)} />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="overview">Brief Overview</label>
              <textarea id="overview" required className="form-input form-textarea" value={overview} onChange={e => setOverview(e.target.value)} />
            </div>
            <div className="form-row">
              <span className="form-label">Documentation Available</span>
              <div className="form-radio-group" role="radiogroup" aria-label="Documentation Available">
                {['Yes', 'No'].map(opt => (
                  <label key={opt} className="form-radio-option">
                    <input
                      type="radio"
                      name="documentationAvailable"
                      value={opt}
                      required
                      checked={documentationAvailable === opt}
                      onChange={e => setDocumentationAvailable(e.target.value)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-submit-row">
              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
            </div>
            <p className="form-confidential">This inquiry is confidential.</p>
          </form>
        )}
      </main>
      <footer className="contact-footer">
        <span className="contact-footer-l">Orion Trade &amp; Logistics LLC</span>
        <span className="contact-footer-r">New York</span>
      </footer>
    </div>
  );
}
