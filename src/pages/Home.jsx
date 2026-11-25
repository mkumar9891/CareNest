import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const marqueeItems = [
  ['✚', 'NABH Accredited Hospital'],
  ['🏆', 'Best Hospital Award 2024'],
  ['📱', 'Teleconsult from anywhere'],
  ['🧪', 'Home Sample Collection'],
  ['💳', 'Cashless Insurance Accepted'],
  ['🚑', '24/7 Emergency Services'],
  ['🌐', '15+ Years of Excellence'],
]

const specialities = [
  { id: 'cardiology', icon: '❤️', name: 'Cardiology', sub: 'Heart & Vascular' },
  { id: 'neurology', icon: '🧠', name: 'Neurology', sub: 'Brain & Spine' },
  { id: 'orthopedics', icon: '🦴', name: 'Orthopedics', sub: 'Joints & Bones' },
  { id: 'oncology', icon: '🎗️', name: 'Oncology', sub: 'Cancer Care' },
  { id: 'pediatrics', icon: '👶', name: 'Pediatrics', sub: 'Child Health' },
  { id: 'gynecology', icon: '🌸', name: 'Gynecology', sub: "Women's Health" },
  { id: 'dermatology', icon: '🫧', name: 'Dermatology', sub: 'Skin & Hair' },
  { id: 'ent', icon: '👂', name: 'ENT', sub: 'Ear Nose Throat' },
  { id: 'ophthalmology', icon: '👁️', name: 'Ophthalmology', sub: 'Eye Care' },
  { id: 'gastro', icon: '🫁', name: 'Gastroenterology', sub: 'Digestive Health' },
  { id: 'urology', icon: '🔬', name: 'Urology', sub: 'Kidney & Bladder' },
]

const doctors = [
  { name: 'Dr. Arvind Sharma', spec: 'Senior Cardiologist', exp: 'MD, DM Cardiology · 20+ years exp.', rating: '4.9', reviews: 842, avail: 'Available Today', emoji: '👨‍⚕️', id: 'sharma' },
  { name: 'Dr. Priya Nair', spec: 'Neurologist', exp: 'MBBS, MD Neurology · 15+ years exp.', rating: '4.8', reviews: 610, avail: 'Available Today', emoji: '👩‍⚕️', id: 'nair' },
  { name: 'Dr. Rajesh Gupta', spec: 'Orthopedic Surgeon', exp: 'MS Ortho, Fellowship UK · 18 yrs exp.', rating: '4.9', reviews: 730, avail: 'Next: Tomorrow', emoji: '👨‍⚕️', id: 'gupta' },
  { name: 'Dr. Meera Pillai', spec: 'Gynecologist & Obstetrician', exp: 'MS OBG, FRCOG · 12 yrs exp.', rating: '4.9', reviews: 950, avail: 'Available Today', emoji: '👩‍⚕️', id: 'pillai' },
]

const packages = [
  {
    name: 'Basic Wellness', price: '₹499', featured: false,
    items: ['Complete Blood Count (CBC)', 'Blood Sugar (Fasting)', 'Lipid Profile', 'Kidney Function Test', 'Urine Routine'],
    id: 'basic'
  },
  {
    name: 'Master Health Checkup', price: '₹1,999', featured: true, badge: '⭐ Most Popular',
    items: ['72 Parameters Test', 'ECG + Echo', 'Chest X-Ray', 'Thyroid Profile (T3/T4/TSH)', 'HbA1c + Liver Function', 'Vitamin B12 & D3', 'Doctor Consultation Included'],
    id: 'master'
  },
  {
    name: "Women's Health Package", price: '₹2,499', featured: false,
    items: ['Mammography', 'Pap Smear', 'Pelvic USG', 'Bone Density (DEXA)', 'Hormone Panel', 'Gynecologist Consultation'],
    id: 'womens'
  },
]

const testimonials = [
  { text: "CureNest gave me a new lease on life. Dr. Sharma's cardiac team performed my bypass surgery with incredible precision. The care I received was truly world-class.", name: 'Ramesh Verma', role: 'Cardiac Surgery Patient', initial: 'R' },
  { text: "The teleconsult service is a blessing! I live 200km away and can consult Dr. Nair for my mother's neurological condition without the stress of traveling.", name: 'Sunita Joshi', role: 'Teleconsult User, Pune', initial: 'S' },
  { text: "The home sample collection was seamless. The phlebotomist arrived on time, was professional, and results were on WhatsApp within 6 hours. Amazing service!", name: 'Amit Khanna', role: 'Home Lab User, Delhi', initial: 'A' },
]

const blog = [
  { emoji: '❤️', cat: 'Cardiology', date: 'Nov 20, 2026', read: '5 min read', title: '5 Heart Health Tips for the Monsoon Season', excerpt: 'Learn how to protect your heart during the high-risk monsoon period with simple lifestyle changes...' },
  { emoji: '🩺', cat: 'Diabetes', date: 'Nov 15, 2026', read: '7 min read', title: 'Complete Guide to Managing Type 2 Diabetes', excerpt: 'Diet, exercise, medication — a holistic approach to controlling blood sugar and preventing complications...' },
  { emoji: '🌸', cat: "Women's Health", date: 'Nov 10, 2026', read: '4 min read', title: 'Why Every Woman Needs an Annual Health Checkup', excerpt: "Early detection saves lives. Here's what every woman's annual health checkup should include..." },
]

function StatCounter({ target, suffix }) {
  const ref = useRef(null)
  const animated = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !animated.current) {
        animated.current = true
        let count = 0
        const step = target / 60
        const timer = setInterval(() => {
          count += step
          if (count >= target) { count = target; clearInterval(timer) }
          el.textContent = Math.floor(count) + suffix
        }, 25)
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, suffix])
  return <div className="num" ref={ref}>0{suffix}</div>
}

export default function Home() {
  const navigate = useNavigate()
  const doubledMarquee = [...marqueeItems, ...marqueeItems]

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">🏥 NABH Accredited Hospital · Est. 2010</div>
              <h1>Your Health is Our <span>Sacred</span> Responsibility</h1>
              <p>CureNest brings world-class multi-specialty care to your doorstep. From precision surgery to teleconsultation — experience healthcare reimagined with compassion and technology.</p>
              <div className="hero-actions">
                <Link to="/appointment" className="btn btn-gold btn-lg">📅 Book Appointment</Link>
                <Link to="/teleconsult" className="btn btn-white btn-lg">📱 Consult Online</Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><StatCounter target={250} suffix="+" /><div className="lbl">Expert Doctors</div></div>
                <div className="hero-stat"><StatCounter target={50} suffix="k+" /><div className="lbl">Patients Served</div></div>
                <div className="hero-stat"><StatCounter target={40} suffix="+" /><div className="lbl">Specialities</div></div>
                <div className="hero-stat"><StatCounter target={15} suffix=" Yrs" /><div className="lbl">Excellence</div></div>
              </div>
            </div>
            <div className="hero-img">
              <div className="hero-img-frame">
                <img
                  src="/Images/hero-hospital.jpg"
                  alt="CureNest Multispeciality Hospital doctors in modern hospital lobby"
                  className="hero-banner-img"
                />
                <div className="hero-float-card card2">
                  <div className="icon">🩺</div>
                  <div className="info"><div className="num">24/7</div><div className="lbl">Emergency Care</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <div className="container" style={{position:'relative',zIndex:10,marginTop:'-40px'}}>
        <div className="quick-search">
          <h3>🔍 Find Doctor / Department</h3>
          <div className="search-form">
            <div className="form-group">
              <label>Speciality</label>
              <select>
                <option value="">All Specialities</option>
                <option>Cardiology</option><option>Orthopedics</option><option>Neurology</option>
                <option>Oncology</option><option>Pediatrics</option><option>Gynecology</option>
              </select>
            </div>
            <div className="form-group">
              <label>Doctor Name</label>
              <input type="text" placeholder="Search doctor…" />
            </div>
            <div className="form-group">
              <label>Appointment Date</label>
              <input type="date" />
            </div>
            <button className="btn btn-primary" onClick={() => navigate('/appointment')}>Search →</button>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-wrap" style={{marginTop:'48px'}}>
        <div className="marquee-track">
          {doubledMarquee.map(([icon, text], i) => (
            <span key={i}><i>{icon}</i> {text}</span>
          ))}
        </div>
      </div>

      {/* Specialities */}
      <section className="section-pad">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge">Our Specialities</div>
            <h2>World-Class Care Across <br />All Medical Disciplines</h2>
            <div className="divider" />
            <p>40+ specialities under one roof, served by India's finest medical professionals.</p>
          </div>
          <div className="spec-grid">
            {specialities.map(s => (
              <Link key={s.id} to={`/specialities#${s.id}`} className="spec-card">
                <div className="spec-icon">{s.icon}</div>
                <h4>{s.name}</h4>
                <p>{s.sub}</p>
              </Link>
            ))}
            <Link to="/specialities" className="spec-card" style={{background:'var(--mint)',borderColor:'var(--primary)'}}>
              <div className="spec-icon" style={{background:'var(--white)'}}>➕</div>
              <h4>View All 40+</h4>
              <p>Specialities</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="section-pad bg-mint">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge">Our Experts</div>
            <h2>Meet Our Distinguished <br />Medical Team</h2>
            <div className="divider" />
            <p>Trained at India's premier institutes, our doctors combine expertise with empathy.</p>
          </div>
          <div className="doctors-grid">
            {doctors.map(d => (
              <div key={d.id} className="doctor-card">
                <div className="doctor-img">
                  <span>{d.emoji}</span>
                  <div className="avail-badge">{d.avail}</div>
                </div>
                <div className="doctor-info">
                  <h4>{d.name}</h4>
                  <div className="spec">{d.spec}</div>
                  <div className="exp">{d.exp}</div>
                  <div className="ratings"><span className="stars">★★★★★</span> {d.rating} ({d.reviews} reviews)</div>
                  <Link to={`/appointment?doc=${d.id}`} className="btn btn-primary btn-sm">Book Appointment</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/doctors" className="btn btn-outline btn-lg">View All 250+ Doctors →</Link>
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="section-pad">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge">Health Packages</div>
            <h2>Comprehensive Health Checkups <br />at Unbeatable Prices</h2>
            <div className="divider" />
          </div>
          <div className="pkg-grid">
            {packages.map(pkg => (
              <div key={pkg.id} className={`pkg-card${pkg.featured ? ' featured' : ''}`}>
                <div className="pkg-head">
                  <div>
                    {pkg.badge && <div className="badge badge-gold" style={{marginBottom:'8px'}}>{pkg.badge}</div>}
                    <h4>{pkg.name}</h4>
                  </div>
                  <div className="price">{pkg.price}<span>/person</span></div>
                </div>
                <div className="pkg-body">
                  <ul>{pkg.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
                <div className="pkg-foot">
                  <Link to={`/appointment?pkg=${pkg.id}`} className="btn btn-outline btn-sm">Know More</Link>
                  <Link to={`/appointment?pkg=${pkg.id}`} className="btn btn-primary btn-sm">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teleconsult */}
      <section className="section-pad bg-mint">
        <div className="container">
          <div className="tele-grid">
            <div>
              <div className="badge">Teleconsultation</div>
              <h2 style={{fontFamily:'var(--font-head)',fontSize:'2rem',fontWeight:800,color:'var(--navy)',margin:'16px 0 10px',lineHeight:1.3}}>Doctor on Your Screen, <br />Anytime Anywhere</h2>
              <p style={{color:'var(--text-gray)'}}>No queues, no travel. Consult India's top specialists from the comfort of your home in under 15 minutes.</p>
              <div className="tele-features">
                <div className="tele-feat"><div className="icon">📱</div><div><h5>Instant Video Consultation</h5><p>HD video calls with verified specialists — available from 8AM to 10PM.</p></div></div>
                <div className="tele-feat"><div className="icon">💊</div><div><h5>Digital Prescriptions</h5><p>Legally valid e-prescriptions delivered to your WhatsApp &amp; email.</p></div></div>
                <div className="tele-feat"><div className="icon">📋</div><div><h5>Follow-up Reminders</h5><p>Automated follow-ups, medication reminders via WhatsApp.</p></div></div>
              </div>
              <Link to="/teleconsult" className="btn btn-primary btn-lg mt-3">Start Teleconsult →</Link>
            </div>
            <div className="tele-visual">
              <div className="big-icon">💻</div>
              <h3>Consult in 3 Easy Steps</h3>
              <p>Simple, secure &amp; seamless digital healthcare</p>
              <div className="tele-steps">
                <div className="tele-step"><div className="num">1</div><p>Choose Specialist</p></div>
                <div className="tele-step"><div className="num">2</div><p>Book &amp; Pay Online</p></div>
                <div className="tele-step"><div className="num">3</div><p>Video Consult</p></div>
                <div className="tele-step"><div className="num">4</div><p>Get e-Prescription</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge">Patient Stories</div>
            <h2>What Our Patients Say</h2>
            <div className="divider" />
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-quote">"</div>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-top" style={{marginTop:'16px'}}>
                  <div className="testi-avatar">{t.initial}</div>
                  <div className="testi-name"><h5>{t.name}</h5><p>{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <div className="trust-wrap">
        <div className="container">
          <h6>Accredited &amp; Trusted By</h6>
          <div className="trust-logos">
            <div className="trust-logo">🏆 NABH Accredited</div>
            <div className="trust-logo">🌐 JCI Certified</div>
            <div className="trust-logo">💳 Cashless – 200+ Insurers</div>
            <div className="trust-logo">🏥 AYUSHMAN BHARAT</div>
            <div className="trust-logo">⭐ ISO 9001:2015</div>
            <div className="trust-logo">🇮🇳 MoHFW Registered</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Your Health Journey Starts Today</h2>
          <p>Book an appointment with India's top specialists. Quick, easy, and fully online — from consultation to prescription.</p>
          <div className="actions">
            <Link to="/appointment" className="btn btn-gold btn-lg">📅 Book Appointment</Link>
            <Link to="/teleconsult" className="btn btn-white btn-lg">📱 Teleconsult Now</Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section-pad">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge">Health Blog</div>
            <h2>Stay Informed, Stay Healthy</h2>
            <div className="divider" />
          </div>
          <div className="blog-grid">
            {blog.map((b, i) => (
              <div key={i} className="blog-card">
                <div className="blog-thumb">
                  {b.emoji}
                  <div className="blog-cat"><span className="tag">{b.cat}</span></div>
                </div>
                <div className="blog-info">
                  <div className="blog-meta"><span>📅 {b.date}</span><span>⏱ {b.read}</span></div>
                  <h4>{b.title}</h4>
                  <p>{b.excerpt}</p>
                  <Link to="/blog" className="read-more">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

