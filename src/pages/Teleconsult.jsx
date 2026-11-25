import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const consultTypes = [
  { key: 'video', icon: '📹', label: 'Video Call', desc: 'HD video consultation', price: 'From ₹400' },
  { key: 'audio', icon: '📞', label: 'Audio Call', desc: 'Voice-only consultation', price: 'From ₹300' },
  { key: 'chat', icon: '💬', label: 'Chat / Text', desc: 'Detailed text consultation', price: 'From ₹200' },
]

const teleDoc = [
  { name: 'Dr. Arvind Sharma', spec: 'Cardiologist · 20 yrs exp.', status: '🟢 Available Now', wait: 'Wait: ~5 min · ₹400', slug: 'sharma', emoji: '👨‍⚕️', avail: true },
  { name: 'Dr. Priya Nair', spec: 'Neurologist · 15 yrs exp.', status: '🟢 Available Now', wait: 'Wait: ~10 min · ₹350', slug: 'nair', emoji: '👩‍⚕️', avail: true },
  { name: 'Dr. Vinod Kumar', spec: 'General Medicine · 12 yrs exp.', status: '🟡 In 20 min', wait: 'Wait: ~20 min · ₹250', slug: 'kumar', emoji: '👨‍⚕️', avail: false },
  { name: 'Dr. Ananya Krishna', spec: 'Pediatrician · 10 yrs exp.', status: '🟢 Available Now', wait: 'Wait: ~8 min · ₹300', slug: 'krishna', emoji: '👩‍⚕️', avail: true },
]

const faqs = [
  { q: 'Is the teleconsult legally valid?', a: 'Yes! All teleconsultations and e-prescriptions from CureNest are fully compliant with the Telemedicine Practice Guidelines issued by the Medical Council of India (MCI) and the Ministry of Health & Family Welfare.' },
  { q: 'What equipment do I need?', a: 'Just a smartphone or laptop with a working camera, microphone and internet connection. No app download needed — your doctor will share a secure link on WhatsApp/SMS.' },
  { q: 'Can I share medical reports during the call?', a: 'Yes, you can upload reports when booking, and also share images/files during the consultation via our secure portal.' },
  { q: 'What is the refund policy?', a: 'Full refund if cancelled 2+ hours before the appointment. 50% refund for cancellations under 2 hours. No refund for no-shows.' },
  { q: 'Is insurance covered for teleconsult?', a: "We accept most major health insurance plans for teleconsult. Please check with our billing team (+91-123-456-7890) to confirm your insurer's coverage." },
]

export default function Teleconsult() {
  const [selectedType, setSelectedType] = useState('video')
  const [openFaq, setOpenFaq] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Teleconsultation</span></div>
          <h1>Teleconsultation</h1>
          <p>See a top doctor in minutes — from your home, office, or anywhere in India.</p>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad bg-mint">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'24px'}}>
            {[
              { icon: '⚡', title: 'In Under 15 Minutes', desc: 'Consult a specialist faster than any OPD queue' },
              { icon: '🔒', title: '100% Private & Secure', desc: 'End-to-end encrypted video consultation' },
              { icon: '📄', title: 'Legal e-Prescription', desc: 'Digitally signed, valid at any pharmacy' },
              { icon: '💬', title: 'WhatsApp Follow-Up', desc: 'Post-consult support & medication reminders' },
            ].map((f, i) => (
              <div key={i} style={{textAlign:'center',padding:'28px 20px',background:'var(--white)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow)'}}>
                <div style={{fontSize:'2.5rem',marginBottom:'14px'}}>{f.icon}</div>
                <h4 style={{color:'var(--navy)',fontWeight:700,marginBottom:'8px'}}>{f.title}</h4>
                <p style={{fontSize:'.85rem',color:'var(--text-gray)'}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking + Doctors */}
      <section className="section-pad">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'40px',alignItems:'start'}}>
            <div>
              <div className="badge" style={{marginBottom:'16px'}}>Book Teleconsult</div>
              <h2 style={{fontFamily:'var(--font-head)',fontSize:'1.9rem',fontWeight:800,color:'var(--navy)',marginBottom:'12px'}}>Choose Your Consultation Type</h2>
              <div className="consult-type-grid">
                {consultTypes.map(ct => (
                  <div
                    key={ct.key}
                    className={`consult-type-card${selectedType === ct.key ? ' selected' : ''}`}
                    onClick={() => setSelectedType(ct.key)}
                  >
                    <div className="cicon">{ct.icon}</div>
                    <h5>{ct.label}</h5>
                    <p>{ct.desc}</p>
                    <strong style={{color:'var(--primary)',fontSize:'.9rem'}}>{ct.price}</strong>
                  </div>
                ))}
              </div>

              <div className="form-box">
                <div className="form-row">
                  <div className="form-group">
                    <label>Speciality</label>
                    <select>
                      <option value="">Choose Speciality</option>
                      <option>Cardiology</option><option>Neurology</option><option>General Medicine</option>
                      <option>Pediatrics</option><option>Gynecology</option><option>Dermatology</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Language</label>
                    <select>
                      <option>English</option><option>Hindi</option><option>Tamil</option><option>Telugu</option><option>Malayalam</option>
                    </select>
                  </div>
                </div>
                <div className="form-row" style={{marginTop:'16px'}}>
                  <div className="form-group"><label>Date</label><input type="date" /></div>
                  <div className="form-group">
                    <label>Time Preference</label>
                    <select><option>Morning (8–12)</option><option>Afternoon (12–5)</option><option>Evening (5–10)</option></select>
                  </div>
                </div>
                <div className="form-group" style={{marginTop:'16px'}}>
                  <label>Describe Your Symptoms</label>
                  <textarea placeholder="Brief description helps the doctor prepare…" />
                </div>
                <button className="btn btn-primary btn-lg mt-2" style={{width:'100%',justifyContent:'center'}} onClick={() => navigate('/appointment')}>
                  📱 Book Teleconsult →
                </button>
              </div>
            </div>

            <div>
              <h3 style={{fontFamily:'var(--font-head)',color:'var(--navy)',fontSize:'1.4rem',marginBottom:'20px'}}>🟢 Available Now for Teleconsult</h3>
              {teleDoc.map((d, i) => (
                <div key={i} className={`doc-mini-card${i === 0 ? ' selected' : ''}`}>
                  <div className="doc-mini-avatar">{d.emoji}</div>
                  <div style={{flex:1}}>
                    <h5 style={{color:'var(--navy)',fontWeight:700}}>{d.name}</h5>
                    <p style={{fontSize:'.8rem',color:'var(--text-gray)'}}>{d.spec}</p>
                    <div style={{display:'flex',alignItems:'center',gap:'10px',marginTop:'4px'}}>
                      <span style={{fontSize:'.78rem',color: d.avail ? 'var(--accent)' : '#ff7043',fontWeight:600}}>{d.status}</span>
                      <span style={{fontSize:'.78rem',color:'var(--text-gray)'}}>{d.wait}</span>
                    </div>
                  </div>
                  <Link to={`/appointment?doc=${d.slug}&type=tele`} className="btn btn-primary btn-sm">Consult</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad bg-mint">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge">How It Works</div>
            <h2>Start Consulting in 4 Easy Steps</h2>
            <div className="divider" />
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'28px',textAlign:'center'}}>
            {[
              { n: 1, title: 'Select Specialist', desc: 'Choose from 250+ verified specialists across all departments' },
              { n: 2, title: 'Book & Pay Online', desc: 'Secure payment via UPI, card or net banking. Instant confirmation.' },
              { n: 3, title: 'Join Video Call', desc: 'Get a secure link on WhatsApp. No app download needed.' },
              { n: 4, title: 'Get e-Prescription', desc: 'Digital prescription on WhatsApp & email within minutes of consult' },
            ].map(step => (
              <div key={step.n}>
                <div style={{width:'60px',height:'60px',borderRadius:'50%',background:'var(--primary)',color:'var(--white)',fontSize:'1.5rem',fontWeight:800,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>{step.n}</div>
                <h5 style={{color:'var(--navy)',fontWeight:700,marginBottom:'8px'}}>{step.title}</h5>
                <p style={{fontSize:'.85rem',color:'var(--text-gray)'}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container" style={{maxWidth:'720px'}}>
          <div className="section-head text-center">
            <div className="badge">FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <div className="divider" />
          </div>
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                {faq.q} <span className="faq-arrow">▼</span>
              </div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

