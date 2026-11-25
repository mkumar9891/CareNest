import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const specs = [
  {
    id: 'cardiology', icon: '❤️', name: 'Cardiology & Cardiac Surgery',
    desc: 'Advanced heart care with state-of-the-art cath lab, TAVR & robotic surgery',
    cat: 'surgical medical',
    cols: [
      { title: 'Conditions Treated', items: ['Coronary Artery Disease', 'Heart Failure', 'Arrhythmias', 'Valvular Heart Disease', 'Congenital Heart Defects'] },
      { title: 'Procedures', items: ['Angioplasty & Stenting', 'Bypass Surgery (CABG)', 'Pacemaker Implantation', 'TAVR / TAVI', 'Robotic Heart Surgery'] },
      { title: 'Diagnostics', items: ['2D Echocardiography', 'Stress Test (TMT)', 'Holter Monitoring', 'CT Coronary Angiography', 'Cardiac MRI'] },
    ]
  },
  {
    id: 'neurology', icon: '🧠', name: 'Neurology & Neurosurgery',
    desc: 'Comprehensive brain, spine & nervous system care with latest neuro-navigation',
    cat: 'medical surgical',
    cols: [
      { title: 'Conditions Treated', items: ['Stroke & TIA', 'Epilepsy', "Parkinson's Disease", 'Multiple Sclerosis', 'Brain Tumors'] },
      { title: 'Procedures', items: ['Deep Brain Stimulation', 'Craniotomy', 'Spinal Fusion', 'Endoscopic Brain Surgery', 'Stereotactic Radiosurgery'] },
      { title: 'Diagnostics', items: ['MRI Brain & Spine (3T)', 'EEG & EMG', 'CT Angiography', 'Nerve Conduction Study', 'PET Scan'] },
    ]
  },
  {
    id: 'orthopedics', icon: '🦴', name: 'Orthopedics & Joint Replacement',
    desc: "India's leading joint replacement centre with robotic-assisted surgery",
    cat: 'surgical',
    cols: [
      { title: 'Conditions Treated', items: ['Osteoarthritis', 'Fractures & Trauma', 'Sports Injuries', 'Spine Disorders', 'Rheumatoid Arthritis'] },
      { title: 'Procedures', items: ['Total Knee Replacement', 'Hip Replacement', 'Arthroscopy', 'Spine Surgery', 'Robotic Joint Surgery'] },
      { title: 'Diagnostics', items: ['X-Ray (Digital)', 'MRI Joints', 'DEXA Bone Density', 'Bone Scan', 'CT Arthrography'] },
    ]
  },
  {
    id: 'oncology', icon: '🎗️', name: 'Oncology & Cancer Care',
    desc: 'Comprehensive cancer centre with immunotherapy, robotic surgery & precision medicine',
    cat: 'medical surgical',
    cols: [
      { title: 'Cancers Treated', items: ['Breast Cancer', 'Lung Cancer', 'Colorectal Cancer', 'Blood Cancers', 'Prostate Cancer'] },
      { title: 'Treatments', items: ['Chemotherapy', 'Radiation Therapy (LINAC)', 'Immunotherapy', 'Targeted Therapy', 'Bone Marrow Transplant'] },
      { title: 'Diagnostics', items: ['PET-CT Scan', 'Liquid Biopsy', 'Genomic Testing', 'Tumor Markers', 'Biopsy & Histopathology'] },
    ]
  },
  {
    id: 'pediatrics', icon: '👶', name: 'Pediatrics & Neonatology',
    desc: 'Specialized child health care from newborns to adolescents with Level III NICU',
    cat: 'medical',
    cols: [
      { title: 'Care Areas', items: ['Newborn Care (NICU)', 'Pediatric Cardiology', 'Child Neurology', 'Developmental Disorders', 'Adolescent Health'] },
      { title: 'Services', items: ['Well-baby Clinics', 'Vaccination Programs', 'Growth Monitoring', 'Nutritional Counseling', 'Pediatric Surgery'] },
      { title: 'Facilities', items: ['50-bed Level III NICU', 'Child-friendly OPD', 'Play Therapy Room', 'Dedicated Pediatric ER', '24/7 Pediatric ICU'] },
    ]
  },
  {
    id: 'gynecology', icon: '🌸', name: 'Gynecology & Obstetrics',
    desc: 'Complete women\'s health from adolescence to menopause. Advanced maternity care.',
    cat: 'surgical medical wellness',
    cols: [
      { title: 'Conditions', items: ['PCOS / Endometriosis', 'Fibroids & Cysts', 'High-Risk Pregnancy', 'Infertility', 'Cervical Cancer'] },
      { title: 'Services', items: ['Normal & C-Section Delivery', 'IVF & Fertility', 'Laparoscopic Gynecology', 'Hysterectomy', 'Fetal Medicine'] },
      { title: 'Wellness', items: ['Antenatal Classes', 'Breast Cancer Screening', 'Pap Smear', 'Menopause Clinic', "Women's Health Package"] },
    ]
  },
]

const moreSpecs = [
  { id: 'dermatology', icon: '🫧', name: 'Dermatology', sub: 'Skin, Hair & Nails' },
  { id: 'ent', icon: '👂', name: 'ENT', sub: 'Ear, Nose & Throat' },
  { id: 'ophthalmology', icon: '👁️', name: 'Ophthalmology', sub: 'Eye Care' },
  { id: 'gastro', icon: '🫁', name: 'Gastroenterology', sub: 'Digestive Health' },
  { id: 'urology', icon: '🔬', name: 'Urology', sub: 'Kidney & Bladder' },
  { id: 'endocrinology', icon: '🧪', name: 'Endocrinology', sub: 'Diabetes & Thyroid' },
  { id: 'psychiatry', icon: '🧘', name: 'Psychiatry', sub: 'Mental Health' },
  { id: 'pulmonology', icon: '🌬️', name: 'Pulmonology', sub: 'Lung & Respiratory' },
  { id: 'nephrology', icon: '💧', name: 'Nephrology', sub: 'Kidney Diseases' },
  { id: 'rheumatology', icon: '🦾', name: 'Rheumatology', sub: 'Joint & Autoimmune' },
  { id: 'dental', icon: '🦷', name: 'Dental', sub: 'Oral Health' },
  { id: 'physiotherapy', icon: '💪', name: 'Physiotherapy', sub: 'Rehabilitation' },
]

const cats = ['all', 'surgical', 'medical', 'diagnostic', 'wellness']

export default function Specialities() {
  const [activeCat, setActiveCat] = useState('all')
  const navigate = useNavigate()

  const filtered = specs.filter(s => activeCat === 'all' || s.cat.includes(activeCat))

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Specialities</span></div>
          <h1>Our Medical Specialities</h1>
          <p>40+ departments. World-class expertise. Compassionate care under one roof.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          {/* Filter */}
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginBottom:'40px',justifyContent:'center'}}>
            {cats.map(cat => (
              <button
                key={cat}
                className={`btn btn-sm${activeCat === cat ? ' btn-primary' : ' btn-outline'}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Speciality Detail Cards */}
          {filtered.map(s => (
            <div key={s.id} className="spec-detail" id={s.id}>
              <div className="spec-detail-head">
                <div className="spec-detail-icon">{s.icon}</div>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
                <button className="btn btn-primary btn-sm" style={{marginLeft:'auto'}} onClick={() => navigate(`/appointment?dept=${s.id}`)}>Book Now</button>
              </div>
              <div className="spec-detail-body">
                {s.cols.map((col, i) => (
                  <div key={i} className="spec-detail-col">
                    <h5>{col.title}</h5>
                    <ul>{col.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* More Specialities */}
          <h3 style={{fontFamily:'var(--font-head)',color:'var(--navy)',marginBottom:'24px',textAlign:'center'}}>More Specialities</h3>
          <div className="spec-grid">
            {moreSpecs.map(s => (
              <Link key={s.id} to={`/appointment?dept=${s.id}`} className="spec-card" id={s.id}>
                <div className="spec-icon">{s.icon}</div>
                <h4>{s.name}</h4>
                <p>{s.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Need Help Choosing the Right Specialist?</h2>
          <p>Our care coordinators are available 24/7 to guide you to the right department and doctor.</p>
          <div className="actions">
            <Link to="/appointment" className="btn btn-gold btn-lg">Book Appointment</Link>
            <a href="tel:+911800CURENEST" className="btn btn-white btn-lg">📞 Call Now</a>
          </div>
        </div>
      </section>
    </>
  )
}

