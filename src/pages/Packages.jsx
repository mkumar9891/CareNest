import { Link } from 'react-router-dom'

const packages = [
  {
    name: 'Basic Health Checkup',
    price: '₹999',
    color: '#14b8a6',
    icon: '🩺',
    tests: ['Complete Blood Count', 'Blood Sugar (Fasting)', 'Urine Routine', 'BMI & Vitals', 'Doctor Consultation'],
  },
  {
    name: 'Comprehensive Health Package',
    price: '₹2,499',
    color: '#0a6e6e',
    icon: '💊',
    popular: true,
    tests: ['All Basic Tests', 'Lipid Profile', 'Liver Function', 'Kidney Function', 'Thyroid (T3/T4/TSH)', 'ECG', 'Chest X-Ray', 'Dietitian Consultation'],
  },
  {
    name: 'Executive Health Package',
    price: '₹4,999',
    color: '#6366f1',
    icon: '🏆',
    tests: ['All Comprehensive Tests', 'Cardiac Stress Test', 'Pulmonary Function', 'Bone Density', 'Full Body Ultrasound', 'Ophthalmology', 'Dental Checkup', 'Cancer Markers'],
  },
  {
    name: 'Women\'s Wellness Package',
    price: '₹2,999',
    color: '#ec4899',
    icon: '🌸',
    tests: ['Gynaecology Consultation', 'Pap Smear', 'Mammography', 'Bone Density', 'Thyroid Profile', 'Hormone Panel', 'CBC & Iron Studies'],
  },
  {
    name: 'Senior Citizen Package',
    price: '₹3,499',
    color: '#f59e0b',
    icon: '👴',
    tests: ['Cardiac Profile', 'Diabetic Screening', 'Kidney & Liver Panel', 'Vision & Hearing', 'Arthritis Panel', 'Memory Assessment', 'Geriatric Consultation'],
  },
  {
    name: 'Diabetes Management',
    price: '₹1,799',
    color: '#10b981',
    icon: '🩸',
    tests: ['HbA1c', 'Fasting & PP Sugar', 'Kidney Function', 'Lipid Profile', 'Foot Examination', 'Eye Screening', 'Diabetologist Consultation'],
  },
]

export default function Packages() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Health Packages</span></div>
          <h1>Health Packages</h1>
          <p>
            Preventive health packages designed for every life stage — affordable, comprehensive, and convenient.
          </p>
        </div>
      </section>

      <section style={{padding:'70px 0',background:'#f8fafc'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'28px'}}>
            {packages.map(pkg => (
              <div key={pkg.name} style={{background:'#fff',borderRadius:'18px',overflow:'hidden',boxShadow: pkg.popular ? `0 8px 32px rgba(10,110,110,.18)` : '0 4px 20px rgba(0,0,0,.07)',border: pkg.popular ? '2px solid #0a6e6e' : '2px solid transparent',position:'relative'}}>
                {pkg.popular && (
                  <div style={{position:'absolute',top:'16px',right:'16px',background:'#0a6e6e',color:'#fff',fontSize:'.75rem',fontWeight:700,padding:'4px 12px',borderRadius:'999px'}}>POPULAR</div>
                )}
                <div style={{background:pkg.color,padding:'28px 24px',textAlign:'center',color:'#fff'}}>
                  <div style={{fontSize:'2.8rem',marginBottom:'8px'}}>{pkg.icon}</div>
                  <h3 style={{fontSize:'1.2rem',fontWeight:700,marginBottom:'6px'}}>{pkg.name}</h3>
                  <div style={{fontSize:'2rem',fontWeight:800}}>{pkg.price}</div>
                  <div style={{fontSize:'.85rem',opacity:.8,marginTop:'2px'}}>per person</div>
                </div>
                <div style={{padding:'24px'}}>
                  <ul style={{listStyle:'none',padding:0,margin:'0 0 20px'}}>
                    {pkg.tests.map(t => (
                      <li key={t} style={{padding:'6px 0',color:'#444',fontSize:'.92rem',borderBottom:'1px solid #f0f0f0',display:'flex',alignItems:'center',gap:'8px'}}>
                        <span style={{color:'#14b8a6',fontWeight:700}}>✓</span> {t}
                      </li>
                    ))}
                  </ul>
                  <Link to="/appointment" style={{display:'block',textAlign:'center',background:pkg.color,color:'#fff',padding:'12px',borderRadius:'10px',fontWeight:700,textDecoration:'none',fontSize:'.95rem'}}>
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

