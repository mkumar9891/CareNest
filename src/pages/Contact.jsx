
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); setSent(true) }

  const mapAddress = 'CareNest Multispeciality Hospital, Sector 18, Noida, UP 201301'
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Contact Us</span></div>
          <h1>Contact Us</h1>
          <p>
            We're here for you 24/7. Reach out for appointments, queries, or emergencies.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section style={{ padding: '60px 0 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '20px', marginBottom: '50px' }}>
            {[
              { icon: '📍', title: 'Address', lines: ['CareNest Multispeciality Hospital', 'SDA 60, Block C, Sector-45, Noida, Uttar Pradesh 201303, India'] },
              { icon: '📞', title: 'Phone', lines: ['1800-CARENEST (Toll Free)', 'Emergency: +91-120-4567890'] },
              { icon: '✉️', title: 'Email', lines: ['care@carenest.in', 'appointments@carenest.in'] },
              { icon: '🕐', title: 'Hours', lines: ['OPD: Mon–Sat, 8AM–8PM', 'Emergency: 24 × 7'] },
            ].map(c => (
              <div key={c.title} style={{ background: '#fff', borderRadius: '14px', padding: '28px 20px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '10px' }}>{c.icon}</div>
                <h4 style={{ color: '#0a6e6e', fontWeight: 700, marginBottom: '8px' }}>{c.title}</h4>
                {c.lines.map(l => <p key={l} style={{ color: '#555', fontSize: '.9rem', margin: '3px 0' }}>{l}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Google Map */}
      <section style={{ padding: '0 0 70px', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '32px' }}>

            {/* Form */}
            <div style={{ background: '#fff', borderRadius: '18px', padding: '36px', boxShadow: '0 4px 20px rgba(0,0,0,.08)' }}>
              <h2 style={{ color: '#0a6e6e', fontSize: '1.5rem', fontWeight: 800, marginBottom: '22px' }}>Send us a Message</h2>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ color: '#0a6e6e', fontWeight: 800, marginBottom: '8px' }}>Message Sent!</h3>
                  <p style={{ color: '#666' }}>We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} style={{ marginTop: '16px', background: '#0a6e6e', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Dr. / Mr. / Ms. ...' },
                    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
                    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                    { label: 'Subject', name: 'subject', type: 'text', placeholder: 'How can we help?' },
                  ].map(f => (
                    <div key={f.name} style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontWeight: 600, color: '#333', marginBottom: '6px', fontSize: '.9rem' }}>{f.label}</label>
                      <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={handle} required
                        style={{ width: '100%', padding: '11px 14px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '.95rem', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  ))}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#333', marginBottom: '6px', fontSize: '.9rem' }}>Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us more..." value={form.message} onChange={handle} required
                      style={{ width: '100%', padding: '11px 14px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '.95rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                  </div>
                  <button type="submit" style={{ width: '100%', background: '#0a6e6e', color: '#fff', border: 'none', padding: '14px', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Google Map */}
            <div
              id="map"
              style={{
                background: '#fff',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,.08)',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ padding: '24px 25px 16px' }}>
                <h3 style={{ color: '#0a6e6e', fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>
                  📍 Find Us Here
                </h3>

              </div>

              <iframe
                title="CareNest Hospital Location - Google Maps"
                src={mapUrl}
                width="100%"
                height="380"
                style={{ border: 0, display: 'block', flex: 1, minHeight: '380px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <div style={{ padding: '18px 24px', textAlign: 'center' }}>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#0a6e6e',
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '.95rem'
                  }}
                >
                  Get Directions ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
