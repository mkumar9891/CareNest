import { useState } from 'react'
import { Link } from 'react-router-dom'

const jobs = [
  {id:1, title:'Senior Cardiologist', dept:'Cardiology', type:'Full-Time', exp:'8+ Years', location:'Delhi', posted:'Nov 20, 2026'},
  {id:2, title:'Staff Nurse (ICU)', dept:'Nursing', type:'Full-Time', exp:'3+ Years', location:'Delhi', posted:'Nov 18, 2026'},
  {id:3, title:'Medical Lab Technician', dept:'Pathology', type:'Full-Time', exp:'2+ Years', location:'Delhi', posted:'Nov 15, 2026'},
  {id:4, title:'Physiotherapist', dept:'Rehabilitation', type:'Full-Time', exp:'2+ Years', location:'Delhi', posted:'Nov 12, 2026'},
  {id:5, title:'Front Desk Executive', dept:'Administration', type:'Full-Time', exp:'1+ Year', location:'Delhi', posted:'Nov 10, 2026'},
  {id:6, title:'Radiologist', dept:'Radiology', type:'Full-Time', exp:'5+ Years', location:'Delhi', posted:'Nov 8, 2026'},
  {id:7, title:'Digital Marketing Manager', dept:'Marketing', type:'Full-Time', exp:'3+ Years', location:'Remote', posted:'Nov 5, 2026'},
  {id:8, title:'Pharmacy Manager', dept:'Pharmacy', type:'Full-Time', exp:'4+ Years', location:'Delhi', posted:'Nov 3, 2026'},
]

const depts = ['All', ...new Set(jobs.map(j => j.dept))]

export default function Careers() {
  const [activeDept, setActiveDept] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = activeDept === 'All' ? jobs : jobs.filter(j => j.dept === activeDept)

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Careers</span></div>
          <h1>Careers at CareNest</h1>
          <p>
            Join a team dedicated to healing. Grow your career while making a real difference in people's lives.
          </p>
        </div>
      </section>

      {/* Why join us */}
      <section style={{padding:'60px 0',background:'#f8fafc'}}>
        <div className="container">
          <h2 style={{textAlign:'center',color:'#0a6e6e',fontSize:'1.9rem',fontWeight:800,marginBottom:'36px'}}>Why Join CareNest?</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'24px',marginBottom:'60px'}}>
            {[
              {icon:'💰', title:'Competitive Pay', text:'Industry-leading salaries with performance bonuses.'},
              {icon:'📚', title:'Learning & Growth', text:'CME programmes, conferences, and skill development.'},
              {icon:'🏥', title:'World-Class Facility', text:'State-of-the-art infrastructure and equipment.'},
              {icon:'🤝', title:'Collaborative Culture', text:'Work alongside India\'s top medical professionals.'},
            ].map(b => (
              <div key={b.title} style={{background:'#fff',borderRadius:'14px',padding:'28px 20px',textAlign:'center',boxShadow:'0 2px 12px rgba(0,0,0,.06)'}}>
                <div style={{fontSize:'2.2rem',marginBottom:'10px'}}>{b.icon}</div>
                <h4 style={{color:'#0a6e6e',fontWeight:700,marginBottom:'8px'}}>{b.title}</h4>
                <p style={{color:'#666',fontSize:'.9rem'}}>{b.text}</p>
              </div>
            ))}
          </div>

          {/* Filter */}
          <h2 style={{color:'#0a6e6e',fontSize:'1.7rem',fontWeight:800,marginBottom:'20px'}}>Open Positions ({filtered.length})</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginBottom:'28px'}}>
            {depts.map(d => (
              <button key={d} onClick={() => setActiveDept(d)}
                style={{padding:'7px 18px',borderRadius:'999px',border:'2px solid #0a6e6e',background:activeDept===d?'#0a6e6e':'#fff',color:activeDept===d?'#fff':'#0a6e6e',fontWeight:600,cursor:'pointer',transition:'all .2s',fontSize:'.9rem'}}>
                {d}
              </button>
            ))}
          </div>

          {/* Job list */}
          <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
            {filtered.map(job => (
              <div key={job.id} style={{background:'#fff',borderRadius:'14px',padding:'22px 24px',boxShadow:'0 2px 12px rgba(0,0,0,.06)',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'14px'}}>
                <div>
                  <h3 style={{color:'#1a1a2e',fontWeight:700,fontSize:'1.05rem',marginBottom:'6px'}}>{job.title}</h3>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'10px',fontSize:'.85rem',color:'#666'}}>
                    <span>🏢 {job.dept}</span>
                    <span>⏱ {job.type}</span>
                    <span>💼 {job.exp}</span>
                    <span>📍 {job.location}</span>
                    <span>📅 {job.posted}</span>
                  </div>
                </div>
                <button onClick={() => setSelected(job)}
                  style={{background:'#0a6e6e',color:'#fff',border:'none',padding:'10px 24px',borderRadius:'10px',fontWeight:700,cursor:'pointer',fontSize:'.9rem',whiteSpace:'nowrap'}}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.5)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:9999,padding:'20px'}}
          onClick={() => setSelected(null)}>
          <div style={{background:'#fff',borderRadius:'18px',padding:'36px',maxWidth:'480px',width:'100%'}} onClick={e => e.stopPropagation()}>
            <h3 style={{color:'#0a6e6e',fontSize:'1.3rem',fontWeight:800,marginBottom:'6px'}}>{selected.title}</h3>
            <p style={{color:'#666',marginBottom:'24px'}}>{selected.dept} · {selected.location}</p>
            <input placeholder="Your Full Name" style={inputStyle} />
            <input placeholder="Email Address" type="email" style={inputStyle} />
            <input placeholder="Phone Number" type="tel" style={inputStyle} />
            <input type="file" accept=".pdf,.doc,.docx" style={{...inputStyle,padding:'10px'}} />
            <div style={{display:'flex',gap:'12px',marginTop:'8px'}}>
              <button onClick={() => setSelected(null)}
                style={{flex:1,padding:'12px',borderRadius:'10px',border:'2px solid #ccc',background:'#fff',color:'#555',fontWeight:700,cursor:'pointer'}}>
                Cancel
              </button>
              <button onClick={() => setSelected(null)}
                style={{flex:1,padding:'12px',borderRadius:'10px',border:'none',background:'#0a6e6e',color:'#fff',fontWeight:700,cursor:'pointer'}}>
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const inputStyle = {
  width:'100%',padding:'11px 14px',borderRadius:'10px',border:'1px solid #ddd',marginBottom:'12px',fontSize:'.95rem',boxSizing:'border-box',outline:'none',
}

