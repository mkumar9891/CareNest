import { useState } from 'react'
import { Link } from 'react-router-dom'

const allDoctors = [
  { id: 1, name: 'Dr. Arvind Sharma', spec: 'Cardiology', role: 'Senior Cardiologist', exp: 'MD, DM Cardiology · AIIMS · 20+ years', rating: '4.9', reviews: 842, avail: 'today', type: 'inperson tele', fee: '₹800', next: 'Today 2:30 PM', emoji: '👨‍⚕️', slug: 'sharma' },
  { id: 2, name: 'Dr. Priya Nair', spec: 'Neurology', role: 'Neurologist', exp: 'MBBS, MD Neurology · CMC Vellore · 15 yrs', rating: '4.8', reviews: 610, avail: 'today', type: 'inperson tele', fee: '₹700', next: 'Today 4:00 PM', emoji: '👩‍⚕️', slug: 'nair' },
  { id: 3, name: 'Dr. Rajesh Gupta', spec: 'Orthopedics', role: 'Orthopedic Surgeon', exp: 'MS Ortho, Fellowship UK · 18 yrs', rating: '4.9', reviews: 730, avail: 'week', type: 'inperson', fee: '₹1,000', next: 'Tomorrow 10:00 AM', emoji: '👨‍⚕️', slug: 'gupta' },
  { id: 4, name: 'Dr. Meera Pillai', spec: 'Gynecology', role: 'Gynecologist & Obstetrician', exp: 'MS OBG, FRCOG · JIPMER · 12 yrs', rating: '4.9', reviews: 950, avail: 'today', type: 'inperson tele', fee: '₹750', next: 'Today 11:30 AM', emoji: '👩‍⚕️', slug: 'pillai' },
  { id: 5, name: 'Dr. Suresh Mehta', spec: 'Oncology', role: 'Senior Oncologist', exp: 'MD, DM Medical Oncology · 22 yrs', rating: '4.8', reviews: 410, avail: 'week', type: 'inperson', fee: '₹1,200', next: 'Thu 10:00 AM', emoji: '👨‍⚕️', slug: 'mehta' },
  { id: 6, name: 'Dr. Ananya Krishna', spec: 'Pediatrics', role: 'Pediatrician', exp: 'MBBS, MD Pediatrics · 10 yrs', rating: '4.9', reviews: 560, avail: 'today', type: 'inperson tele', fee: '₹600', next: 'Today 3:00 PM', emoji: '👩‍⚕️', slug: 'krishna' },
]

export default function Doctors() {
  const [filters, setFilters] = useState({ name: '', spec: '', avail: '', type: '' })

  const setFilter = (key, val) => setFilters(f => ({ ...f, [key]: val }))

  const filtered = allDoctors.filter(d => {
    const name = filters.name.toLowerCase()
    const matchName = !name || d.name.toLowerCase().includes(name)
    const matchSpec = !filters.spec || d.spec.toLowerCase() === filters.spec.toLowerCase()
    const matchAvail = !filters.avail || d.avail === filters.avail
    const matchType = !filters.type || d.type.includes(filters.type)
    return matchName && matchSpec && matchAvail && matchType
  })

  const clearFilters = () => setFilters({ name: '', spec: '', avail: '', type: '' })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Find a Doctor</span></div>
          <h1>Find Your Specialist</h1>
          <p>250+ expert doctors across 40+ specialities. Verified, experienced &amp; compassionate.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="doctors-layout">
            {/* Filter Panel */}
            <div className="filter-panel">
              <h4>🔍 Filter Doctors</h4>
              <div className="filter-group">
                <label>Search Name</label>
                <input type="text" placeholder="Doctor name…" value={filters.name} onChange={e => setFilter('name', e.target.value)} />
              </div>
              <div className="filter-group">
                <label>Speciality</label>
                <select value={filters.spec} onChange={e => setFilter('spec', e.target.value)}>
                  <option value="">All Specialities</option>
                  <option>Cardiology</option><option>Neurology</option><option>Orthopedics</option>
                  <option>Oncology</option><option>Pediatrics</option><option>Gynecology</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Availability</label>
                <select value={filters.avail} onChange={e => setFilter('avail', e.target.value)}>
                  <option value="">Any Time</option>
                  <option value="today">Available Today</option>
                  <option value="week">This Week</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Consultation Type</label>
                <select value={filters.type} onChange={e => setFilter('type', e.target.value)}>
                  <option value="">All Types</option>
                  <option value="inperson">In-Person</option>
                  <option value="tele">Teleconsult</option>
                </select>
              </div>
              <button className="btn btn-outline btn-sm" style={{width:'100%',justifyContent:'center',marginTop:'8px'}} onClick={clearFilters}>Clear Filters</button>
            </div>

            {/* Doctor Listing */}
            <div>
              <div className="sort-bar">
                <div className="doc-count">👨‍⚕️ Showing <span>{filtered.length}</span> Doctors</div>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <label style={{fontSize:'.82rem',color:'var(--text-gray)'}}>Sort by:</label>
                  <select style={{padding:'8px 12px',border:'1.5px solid var(--border)',borderRadius:'8px',fontSize:'.85rem'}}>
                    <option>Relevance</option><option>Rating (High–Low)</option><option>Experience</option><option>Fees (Low–High)</option>
                  </select>
                </div>
              </div>
              <div className="doctors-grid">
                {filtered.map(d => (
                  <div key={d.id} className="doctor-card">
                    <div className="doctor-img">
                      <span>{d.emoji}</span>
                      <div className="avail-badge" style={d.avail === 'week' ? {background:'#ff7043',color:'var(--navy)'} : {}}>
                        {d.avail === 'today' ? 'Available Today' : `Next: ${d.next.split(' ')[0]}`}
                      </div>
                    </div>
                    <div className="doctor-info">
                      <h4>{d.name}</h4>
                      <div className="spec">{d.role}</div>
                      <div className="exp">{d.exp}</div>
                      <div className="ratings"><span className="stars">★★★★★</span> {d.rating} ({d.reviews} reviews)</div>
                      <div style={{display:'flex',gap:'8px',marginBottom:'14px',flexWrap:'wrap'}}>
                        {d.type.includes('inperson') && <span className="tag">In-Person</span>}
                        {d.type.includes('tele') && <span className="tag">Teleconsult</span>}
                      </div>
                      <div style={{fontSize:'.82rem',color:'var(--text-gray)',marginBottom:'12px'}}>
                        📅 Next: <strong style={{color:'var(--primary)'}}>{d.next}</strong> · Fees: <strong>{d.fee}</strong>
                      </div>
                      <Link to={`/appointment?doc=${d.slug}`} className="btn btn-primary btn-sm" style={{width:'100%',justifyContent:'center'}}>Book Appointment</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Can't Find the Right Doctor?</h2>
          <p>Call our 24/7 helpline and our care coordinators will help you find the best specialist for your needs.</p>
          <div className="actions">
            <a href="tel:+911800CURENEST" className="btn btn-gold btn-lg">📞 1800-CURENEST</a>
            <Link to="/appointment" className="btn btn-white btn-lg">📅 Book Online</Link>
          </div>
        </div>
      </section>
    </>
  )
}

