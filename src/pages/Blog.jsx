import { useState } from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {id:1, category:'Heart Health', title:'10 Signs You Should See a Cardiologist', date:'Nov 15, 2026', author:'Dr. Ramesh Verma', img:'❤️',
   excerpt:'Many heart conditions show subtle warning signs that are easy to miss. Here are 10 symptoms you should never ignore…'},
  {id:2, category:'Diabetes', title:'Managing Diabetes in the Festive Season', date:'Nov 10, 2026', author:'Dr. Sunita Rao', img:'🩸',
   excerpt:'Festivals bring sweets and celebrations. Learn how to enjoy the season while keeping your blood sugar in check…'},
  {id:3, category:'Mental Health', title:'Why Mental Health is as Important as Physical Health', date:'Nov 5, 2026', author:'Dr. Priya Sharma', img:'🧠',
   excerpt:'Mental well-being impacts every aspect of life. Here\'s why a holistic approach to health matters more than ever…'},
  {id:4, category:'Nutrition', title:'5 Superfoods to Boost Your Immunity This Winter', date:'Oct 28, 2026', author:'Dt. Meena Joshi', img:'🥦',
   excerpt:'Winter is cold and flu season. Stock up on these powerful immunity-boosting foods to stay healthy all season…'},
  {id:5, category:'Children\'s Health', title:'Vaccinations Schedule Every Parent Must Know', date:'Oct 20, 2026', author:'Dr. Anil Kapoor', img:'👶',
   excerpt:'Keeping up with your child\'s vaccination schedule is one of the most important things you can do as a parent…'},
  {id:6, category:'Women\'s Health', title:'Breast Cancer Awareness: Early Detection Saves Lives', date:'Oct 10, 2026', author:'Dr. Priya Sharma', img:'🎗️',
   excerpt:'Early detection dramatically improves breast cancer survival rates. Know the signs and when to get screened…'},
]

const categories = ['All', ...new Set(posts.map(p => p.category))]

export default function Blog() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Health Blog</span></div>
          <h1>Health Blog</h1>
          <p>
            Expert insights, health tips, and medical news from our team of specialists.
          </p>
        </div>
      </section>

      <section style={{padding:'60px 0',background:'#f8fafc'}}>
        <div className="container">
          {/* Filter */}
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'center',marginBottom:'40px'}}>
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)}
                style={{padding:'8px 20px',borderRadius:'999px',border:'2px solid #0a6e6e',background: active===c ? '#0a6e6e' : '#fff',color: active===c ? '#fff' : '#0a6e6e',fontWeight:600,cursor:'pointer',transition:'all .2s'}}>
                {c}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'28px'}}>
            {filtered.map(post => (
              <article key={post.id} style={{background:'#fff',borderRadius:'16px',overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,.07)',transition:'transform .2s'}}
                onMouseEnter={e=>e.currentTarget.style.transform='translateY(-4px)'}
                onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
                <div style={{background:'linear-gradient(135deg,#0a6e6e,#14b8a6)',height:'160px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'4rem'}}>
                  {post.img}
                </div>
                <div style={{padding:'24px'}}>
                  <span style={{background:'#e0faf8',color:'#0a6e6e',fontSize:'.78rem',fontWeight:700,padding:'4px 10px',borderRadius:'999px'}}>{post.category}</span>
                  <h3 style={{color:'#1a1a2e',fontSize:'1.1rem',fontWeight:700,margin:'12px 0 10px',lineHeight:1.4}}>{post.title}</h3>
                  <p style={{color:'#666',fontSize:'.9rem',lineHeight:1.6,marginBottom:'16px'}}>{post.excerpt}</p>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'.83rem',color:'#999',borderTop:'1px solid #f0f0f0',paddingTop:'12px'}}>
                    <span>✍️ {post.author}</span>
                    <span>📅 {post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

