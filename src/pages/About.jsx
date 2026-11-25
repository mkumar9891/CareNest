import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>About Us</span></div>
          <h1>About CareNest</h1>
          <p>
            A multispeciality hospital built on trust, compassion, and cutting-edge medical care.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{padding:'70px 0',background:'#f8fafc'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'32px'}}>
            {[
              {icon:'🎯', title:'Our Mission', text:'To deliver affordable, compassionate, and world-class healthcare to every patient who walks through our doors.'},
              {icon:'🔭', title:'Our Vision', text:'To be the most trusted multispeciality hospital in the region, known for excellence in clinical outcomes and patient experience.'},
              {icon:'💎', title:'Our Values', text:'Integrity, Empathy, Innovation, Excellence — these four pillars guide every decision we make at CareNest.'},
            ].map(c => (
              <div key={c.title} style={{background:'#fff',borderRadius:'16px',padding:'36px 28px',boxShadow:'0 4px 20px rgba(0,0,0,.07)',textAlign:'center'}}>
                <div style={{fontSize:'2.5rem',marginBottom:'14px'}}>{c.icon}</div>
                <h3 style={{color:'#0a6e6e',fontSize:'1.3rem',fontWeight:700,marginBottom:'12px'}}>{c.title}</h3>
                <p style={{color:'#555',lineHeight:1.7}}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{padding:'60px 0',background:'#0a6e6e',color:'#fff'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:'24px',textAlign:'center'}}>
            {[
              {num:'25+', label:'Years of Excellence'},
              {num:'150+', label:'Expert Doctors'},
              {num:'50K+', label:'Happy Patients'},
              {num:'30+', label:'Specialities'},
              {num:'24/7', label:'Emergency Care'},
            ].map(s => (
              <div key={s.label}>
                <div style={{fontSize:'2.4rem',fontWeight:800,color:'#5eead4'}}>{s.num}</div>
                <div style={{fontSize:'.95rem',opacity:.85,marginTop:'6px'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{padding:'70px 0'}}>
        <div className="container">
          <h2 style={{textAlign:'center',color:'#0a6e6e',fontSize:'2rem',fontWeight:800,marginBottom:'40px'}}>Our Leadership</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'28px'}}>
            {[
              {name:'Dr. Ramesh Verma', role:'Chairman & CEO', img:'👨‍⚕️'},
              {name:'Dr. Priya Sharma', role:'Chief Medical Officer', img:'👩‍⚕️'},
              {name:'Dr. Anil Kapoor', role:'Director – Surgery', img:'👨‍⚕️'},
              {name:'Dr. Sunita Rao', role:'Head – Paediatrics', img:'👩‍⚕️'},
            ].map(p => (
              <div key={p.name} style={{background:'#f8fafc',borderRadius:'16px',padding:'32px 20px',textAlign:'center',boxShadow:'0 2px 12px rgba(0,0,0,.06)'}}>
                <div style={{fontSize:'4rem',marginBottom:'12px'}}>{p.img}</div>
                <h4 style={{color:'#0a6e6e',fontWeight:700,marginBottom:'4px'}}>{p.name}</h4>
                <p style={{color:'#777',fontSize:'.9rem'}}>{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

