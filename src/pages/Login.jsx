import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [tab, setTab] = useState('login') // 'login' | 'register'
  const [form, setForm] = useState({name:'',email:'',phone:'',password:'',confirm:''})
  const navigate = useNavigate()

  const handle = e => setForm({...form,[e.target.name]:e.target.value})
  const submit = e => { e.preventDefault(); navigate('/') }

  const inputStyle = {
    width:'100%',padding:'12px 16px',border:'1.5px solid #ddd',borderRadius:'12px',
    fontSize:'1rem',outline:'none',boxSizing:'border-box',marginBottom:'16px',
    transition:'border-color .2s',
  }

  return (
    <div style={{minHeight:'100vh',background:"linear-gradient(135deg,rgba(15,52,96,.85) 0%,rgba(10,124,140,.82) 100%), url('/Images/hero-hospital.jpg') center/cover no-repeat",display:'flex',alignItems:'center',justifyContent:'center',padding:'40px 16px'}}>
      <div style={{background:'#fff',borderRadius:'24px',padding:'40px',maxWidth:'440px',width:'100%',boxShadow:'0 20px 60px rgba(0,0,0,.18)'}}>
        {/* Logo */}
        <div style={{textAlign:'center',marginBottom:'28px'}}>
          <div style={{fontSize:'2.5rem',marginBottom:'6px'}}>✚</div>
          <h2 style={{color:'#0a6e6e',fontWeight:900,fontSize:'1.7rem',margin:0}}>CareNest</h2>
          <p style={{color:'#888',fontSize:'.9rem',marginTop:'4px'}}>Your health, our priority</p>
        </div>

        {/* Tabs */}
        <div style={{display:'flex',background:'#f4f4f4',borderRadius:'12px',padding:'4px',marginBottom:'28px'}}>
          {[{id:'login',label:'Sign In'},{id:'register',label:'Register'}].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{flex:1,padding:'10px',borderRadius:'10px',border:'none',fontWeight:700,fontSize:'.95rem',cursor:'pointer',transition:'all .2s',
                background:tab===t.id?'#0a6e6e':'transparent',color:tab===t.id?'#fff':'#666'}}>
              {t.label}
            </button>
          ))}
        </div>

        <form onSubmit={submit}>
          {tab === 'register' && (
            <input name="name" placeholder="Full Name" value={form.name} onChange={handle} required style={inputStyle} />
          )}
          <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handle} required style={inputStyle} />
          {tab === 'register' && (
            <input name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handle} required style={inputStyle} />
          )}
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handle} required style={inputStyle} />
          {tab === 'register' && (
            <input name="confirm" type="password" placeholder="Confirm Password" value={form.confirm} onChange={handle} required style={inputStyle} />
          )}

          {tab === 'login' && (
            <div style={{textAlign:'right',marginTop:'-10px',marginBottom:'16px'}}>
              <Link to="/contact" style={{color:'#0a6e6e',fontSize:'.88rem',textDecoration:'none',fontWeight:600}}>Forgot password? Contact Support</Link>
            </div>
          )}

          <button type="submit" style={{width:'100%',background:'linear-gradient(135deg,#0a6e6e,#14b8a6)',color:'#fff',border:'none',padding:'14px',borderRadius:'12px',fontWeight:800,fontSize:'1.05rem',cursor:'pointer',marginBottom:'16px'}}>
            {tab === 'login' ? 'Sign In →' : 'Create Account →'}
          </button>
        </form>

        {tab === 'login' && (
          <div style={{textAlign:'center',color:'#888',fontSize:'.88rem'}}>
            Don't have an account?{' '}
            <button onClick={() => setTab('register')} style={{background:'none',border:'none',color:'#0a6e6e',fontWeight:700,cursor:'pointer',fontSize:'.88rem'}}>Register here</button>
          </div>
        )}

        <div style={{textAlign:'center',marginTop:'20px',paddingTop:'16px',borderTop:'1px solid #eee'}}>
          <Link to="/" style={{color:'#aaa',fontSize:'.85rem',textDecoration:'none'}}>← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

