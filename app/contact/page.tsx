'use client';

import { useState } from 'react';
import './contact.css';

export default function Contact() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [company, setCompany] = useState('');
const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, company, message }),
      <div className="form-row">
  <label className="form-label" htmlFor="email">Email</label>
  <input id="email" type="email" required className="form-input" value={email} onChange={e => setEmail(e.target.value)} />
</div>
<div className="form-row">
  <label className="form-label" htmlFor="phone">Phone</label>
  <input id="phone" type="tel" className="form-input" value={phone} onChange={e => setPhone(e.target.value)} />
</div>
    });
    if (res.ok) setStatus('sent');
    else setStatus('error');
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <a href="/" className="contact-back">Orion</a>
        <span className="contact-title">Enquiries</span>
      </header>
      <div className="contact-wrap">
        <div className="contact-lockup">
          <div className="c-r1" />
          <div className="c-r2" />
          <div className="c-r3" />
          <h1 className="contact-heading">Get in<br />touch.</h1>
          <div className="c-rule" />
        </div>
        {status === 'sent' ? (
          <div className="contact-sent">
            <p>Your enquiry has been received.<br />We will be in touch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{maxWidth: '560px'}}>
            <div className="form-row">
              <label className="form-label" htmlFor="name">Name</label>
              <input id="name" type="text" required className="form-input" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="company">Company</label>
              <input id="company" type="text" className="form-input" value={company} onChange={e => setCompany(e.target.value)} />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea id="message" required className="form-input form-textarea" value={message} onChange={e => setMessage(e.target.value)} />
            </div>
            <div style={{marginTop: '32px'}}>
              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send enquiry'}
              </button>
            </div>
          </form>
        )}
      </div>
      <footer className="contact-footer">
        <span className="contact-footer-l">Orion Trade &amp; Logistics LLC</span>
        <span className="contact-footer-r">New York</span>
      </footer>
    </div>
  );
}