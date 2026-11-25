import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const doctorsByDept = {
  'Cardiology': ['Dr. Arvind Sharma (₹800)', 'Dr. Sunil Verma (₹700)'],
  'Neurology': ['Dr. Priya Nair (₹700)', 'Dr. Karthik Reddy (₹650)'],
  'Orthopedics': ['Dr. Rajesh Gupta (₹1000)', 'Dr. Amir Khan (₹800)'],
  'Gynecology': ['Dr. Meera Pillai (₹750)', 'Dr. Sunitha Rao (₹700)'],
  'Pediatrics': ['Dr. Ananya Krishna (₹600)', 'Dr. Ravi Shankar (₹550)'],
}

const allSlots = ['09:00','09:30','10:00','10:30','11:00','11:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00']
const bookedSlots = ['10:00','11:00','14:30']

const steps = ['Login / OTP', 'Choose Doctor & Slot', 'Patient Details', 'Payment', 'Confirmation']

function Alert({ msg, type }) {
  if (!msg) return null
  const icons = { success: '✅', error: '❌', info: 'ℹ️' }
  return <div className={`alert alert-${type}`}>{icons[type]} {msg}</div>
}

export default function Appointment() {
  const [currentStep, setCurrentStep] = useState(1) // 1-5
  const [alert, setAlert] = useState({ msg: '', type: 'info' })

  // Step 1: OTP
  const [phone, setPhone] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState(['', '', '', ''])
  const [timer, setTimer] = useState(0)
  const otpRefs = [useRef(), useRef(), useRef(), useRef()]

  // Step 2: Booking
  const [dept, setDept] = useState('')
  const [doctorList, setDoctorList] = useState([])
  const [doctor, setDoctor] = useState('')
  const [apptDate, setApptDate] = useState('')
  const [consultType, setConsultType] = useState('In-Person Visit')
  const [slots, setSlots] = useState([])
  const [slotsLoading, setSlotsLoading] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState('')

  // Step 3: Patient
  const [patient, setPatient] = useState({ name: '', age: '', gender: 'Male', blood: 'Unknown', email: '', symptoms: '' })

  // Step 4: Payment
  const [payMethod, setPayMethod] = useState('')
  const [apptId, setApptId] = useState('')

  const showAlert = (msg, type = 'info') => {
    setAlert({ msg, type })
    setTimeout(() => setAlert({ msg: '', type: 'info' }), 4000)
  }

  // Load doctors on dept change
  useEffect(() => {
    setDoctorList(doctorsByDept[dept] || [])
    setDoctor('')
    setSlots([])
    setSelectedSlot('')
  }, [dept])

  // Load slots when doc+date both set
  useEffect(() => {
    if (doctor && apptDate) {
      setSlotsLoading(true)
      setTimeout(() => {
        setSlots(allSlots.map(t => ({ time: t, available: !bookedSlots.includes(t) })))
        setSlotsLoading(false)
      }, 800)
    }
  }, [doctor, apptDate])

  // OTP timer
  useEffect(() => {
    if (timer <= 0) return
    const t = setTimeout(() => setTimer(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [timer])

  const sendOtp = () => {
    if (phone.length < 10) { showAlert('Please enter a valid 10-digit mobile number.', 'error'); return }
    setOtpSent(true)
    setTimer(30)
    showAlert(`OTP sent to +91 ${phone}`, 'success')
  }

  const handleOtpInput = (i, val) => {
    if (!/^\d?$/.test(val)) return
    const newOtp = [...otp]; newOtp[i] = val; setOtp(newOtp)
    if (val && i < 3) otpRefs[i + 1].current.focus()
  }
  const handleOtpKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) otpRefs[i - 1].current.focus()
  }

  const verifyOtp = () => {
    const code = otp.join('')
    if (code.length < 4) { showAlert('Please enter the complete OTP.', 'error'); return }
    if (code === '1234') {
      showAlert('Mobile verified successfully!', 'success')
      setTimeout(() => setCurrentStep(2), 800)
    } else {
      showAlert('Invalid OTP. Use 1234 for demo.', 'error')
    }
  }

  const confirmPayment = () => {
    const id = 'CN' + Date.now()
    setApptId(id)
    showAlert('Payment successful! Booking confirmed. You will receive SMS & WhatsApp confirmation.', 'success')
    setTimeout(() => setCurrentStep(5), 1500)
  }

  const stepStatus = (n) => {
    if (n < currentStep) return 'done'
    if (n === currentStep) return 'active'
    return ''
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Book Appointment</span></div>
          <h1>Book an Appointment</h1>
          <p>Live slots · OTP verification · Secure online payment · Instant confirmation</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          {/* Step Indicator */}
          <div className="steps-wrap">
            {steps.map((label, i) => (
              <div key={i} className={`step-item${stepStatus(i + 1) ? ' ' + stepStatus(i + 1) : ''}`}>
                <div className="step-num">{i + 1}</div>
                <div className="step-label">{label}</div>
              </div>
            ))}
          </div>

          <Alert msg={alert.msg} type={alert.type} />

          <div style={{maxWidth:'720px',margin:'0 auto'}}>

            {/* STEP 1: OTP */}
            {currentStep === 1 && (
              <div className="form-box">
                <h3 style={{fontFamily:'var(--font-head)',color:'var(--navy)',marginBottom:'6px'}}>📱 Mobile Verification</h3>
                <p style={{color:'var(--text-gray)',fontSize:'.9rem',marginBottom:'24px'}}>We'll send you a one-time password to verify your identity.</p>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <div className="phone-input">
                    <div className="country-code">🇮🇳 +91</div>
                    <input type="tel" placeholder="Enter 10-digit number" maxLength={10} value={phone} onChange={e => setPhone(e.target.value)} />
                  </div>
                  <span className="form-hint">Your OTP will be sent via SMS &amp; WhatsApp</span>
                </div>
                <button className="btn btn-primary btn-lg mt-2" style={{width:'100%',justifyContent:'center'}} onClick={sendOtp}>
                  Send OTP →
                </button>

                {otpSent && (
                  <div style={{marginTop:'28px'}}>
                    <p style={{fontSize:'.9rem',color:'var(--text-gray)',marginBottom:'16px'}}>Enter the 4-digit OTP sent to your mobile <strong>(Demo OTP: 1234)</strong></p>
                    <div className="otp-inputs">
                      {otp.map((v, i) => (
                        <input
                          key={i} ref={otpRefs[i]}
                          type="number" maxLength={1} min={0} max={9}
                          value={v}
                          onChange={e => handleOtpInput(i, e.target.value)}
                          onKeyDown={e => handleOtpKeyDown(i, e)}
                        />
                      ))}
                    </div>
                    {timer > 0 && <div style={{textAlign:'center',marginBottom:'16px',fontSize:'.82rem',color:'var(--text-gray)'}}>Resend in {timer}s</div>}
                    <button className="btn btn-primary btn-lg" style={{width:'100%',justifyContent:'center'}} onClick={verifyOtp}>
                      Verify &amp; Continue →
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* STEP 2: Doctor & Slot */}
            {currentStep === 2 && (
              <div className="form-box">
                <h3 style={{fontFamily:'var(--font-head)',color:'var(--navy)',marginBottom:'6px'}}>🏥 Select Doctor &amp; Time Slot</h3>
                <p style={{color:'var(--text-gray)',fontSize:'.9rem',marginBottom:'24px'}}>Slots are fetched live from HIMS. Greyed slots are booked.</p>
                <div className="form-row">
                  <div className="form-group">
                    <label>Department / Speciality</label>
                    <select value={dept} onChange={e => setDept(e.target.value)}>
                      <option value="">Select Department</option>
                      {Object.keys(doctorsByDept).map(d => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Doctor</label>
                    <select value={doctor} onChange={e => setDoctor(e.target.value)}>
                      <option value="">{dept ? 'Select Doctor' : 'Choose department first'}</option>
                      {doctorList.map((d, i) => <option key={i} value={'doc' + i}>{d}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-row" style={{marginTop:'16px'}}>
                  <div className="form-group">
                    <label>Appointment Date</label>
                    <input type="date" value={apptDate} onChange={e => setApptDate(e.target.value)} min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="form-group">
                    <label>Consultation Type</label>
                    <select value={consultType} onChange={e => setConsultType(e.target.value)}>
                      <option>In-Person Visit</option>
                      <option>Teleconsultation (Video)</option>
                    </select>
                  </div>
                </div>
                <div style={{marginTop:'24px'}}>
                  <h5 style={{fontWeight:700,color:'var(--navy)',marginBottom:'4px'}}>Available Slots</h5>
                  <p style={{fontSize:'.8rem',color:'var(--text-gray)',marginBottom:'12px'}}>🟢 Available &nbsp; 🔘 Booked · Select doctor &amp; date to load live slots</p>
                  {slotsLoading && <div style={{textAlign:'center',padding:'20px',color:'var(--primary)'}}>⏳ Loading live slots…</div>}
                  <div className="slots-grid">
                    {slots.length === 0 && !slotsLoading && (
                      <div style={{gridColumn:'1/-1',textAlign:'center',color:'var(--text-gray)',fontSize:'.88rem',padding:'20px'}}>Select doctor and date to view available slots</div>
                    )}
                    {slots.map(s => (
                      <div
                        key={s.time}
                        className={`slot${!s.available ? ' booked' : selectedSlot === s.time ? ' selected' : ''}`}
                        onClick={() => s.available && setSelectedSlot(s.time)}
                      >
                        {s.time}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="btn btn-primary btn-lg mt-3" style={{width:'100%',justifyContent:'center'}} onClick={() => setCurrentStep(3)}>
                  Next: Patient Details →
                </button>
              </div>
            )}

            {/* STEP 3: Patient Details */}
            {currentStep === 3 && (
              <div className="form-box">
                <h3 style={{fontFamily:'var(--font-head)',color:'var(--navy)',marginBottom:'6px'}}>👤 Patient Details</h3>
                <p style={{color:'var(--text-gray)',fontSize:'.9rem',marginBottom:'24px'}}>Please provide accurate details for your appointment record.</p>
                <div className="form-row">
                  <div className="form-group">
                    <label>Patient Name*</label>
                    <input type="text" placeholder="Full name as per ID" value={patient.name} onChange={e => setPatient(p => ({...p, name: e.target.value}))} />
                  </div>
                  <div className="form-group">
                    <label>Age*</label>
                    <input type="number" placeholder="Age in years" min={0} max={120} value={patient.age} onChange={e => setPatient(p => ({...p, age: e.target.value}))} />
                  </div>
                </div>
                <div className="form-row" style={{marginTop:'16px'}}>
                  <div className="form-group">
                    <label>Gender*</label>
                    <select value={patient.gender} onChange={e => setPatient(p => ({...p, gender: e.target.value}))}>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Blood Group</label>
                    <select value={patient.blood} onChange={e => setPatient(p => ({...p, blood: e.target.value}))}>
                      <option>Unknown</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
                    </select>
                  </div>
                </div>
                <div className="form-group" style={{marginTop:'16px'}}>
                  <label>Email Address</label>
                  <input type="email" placeholder="Appointment confirmation will be sent here" value={patient.email} onChange={e => setPatient(p => ({...p, email: e.target.value}))} />
                </div>
                <div className="form-group" style={{marginTop:'16px'}}>
                  <label>Symptoms / Reason for Visit</label>
                  <textarea placeholder="Briefly describe your symptoms or reason for visiting the doctor…" value={patient.symptoms} onChange={e => setPatient(p => ({...p, symptoms: e.target.value}))} />
                </div>
                <div className="form-group" style={{marginTop:'16px'}}>
                  <label>Upload Previous Reports (optional)</label>
                  <input type="file" accept=".pdf,.jpg,.png" multiple />
                  <span className="form-hint">Upload PDF, JPG or PNG. Max 5MB per file.</span>
                </div>
                <div style={{display:'flex',gap:'12px',marginTop:'24px'}}>
                  <button className="btn btn-outline" onClick={() => setCurrentStep(2)}>← Back</button>
                  <button className="btn btn-primary btn-lg" style={{flex:1,justifyContent:'center'}} onClick={() => setCurrentStep(4)}>Next: Payment →</button>
                </div>
              </div>
            )}

            {/* STEP 4: Payment */}
            {currentStep === 4 && (
              <div className="form-box">
                <h3 style={{fontFamily:'var(--font-head)',color:'var(--navy)',marginBottom:'6px'}}>💳 Payment</h3>
                <p style={{color:'var(--text-gray)',fontSize:'.9rem',marginBottom:'24px'}}>Secure payment powered by Razorpay. 100% safe &amp; encrypted.</p>

                <div style={{background:'var(--mint)',borderRadius:'var(--radius)',padding:'20px',marginBottom:'24px',border:'1.5px solid var(--border)'}}>
                  <h5 style={{color:'var(--navy)',fontWeight:700,marginBottom:'14px'}}>📋 Appointment Summary</h5>
                  {[
                    ['Doctor', dept ? doctorList[0] || 'Dr. Arvind Sharma' : 'Dr. Arvind Sharma'],
                    ['Speciality', dept || 'Cardiology'],
                    ['Date & Time', selectedSlot ? `${apptDate} ${selectedSlot}` : 'Selected Slot'],
                    ['Type', consultType],
                    ['Consultation Fee', '₹800'],
                    ['Platform Fee', '₹0'],
                  ].map(([k, v]) => (
                    <div key={k} style={{display:'flex',justifyContent:'space-between',fontSize:'.88rem',padding:'6px 0',borderBottom:'1px solid var(--border)'}}>
                      <span style={{color:'var(--text-gray)'}}>{k}</span><strong>{v}</strong>
                    </div>
                  ))}
                  <div style={{display:'flex',justifyContent:'space-between',fontSize:'1rem',padding:'12px 0 0'}}>
                    <span style={{fontWeight:700,color:'var(--navy)'}}>Total Amount</span>
                    <strong style={{color:'var(--primary)',fontSize:'1.2rem'}}>₹800</strong>
                  </div>
                </div>

                <h5 style={{color:'var(--navy)',fontWeight:700,marginBottom:'14px'}}>Select Payment Method</h5>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginBottom:'20px'}}>
                  {[['upi', '📱 UPI / GPay'], ['card', '💳 Debit / Credit Card'], ['netbanking', '🏦 Net Banking'], ['insurance', '🏥 Insurance / TPA']].map(([key, label]) => (
                    <label key={key} style={{border:`${payMethod === key ? '2px solid var(--primary)' : '1.5px solid var(--border)'}`,background: payMethod === key ? 'var(--mint)' : 'var(--white)',borderRadius:'10px',padding:'14px',cursor:'pointer',display:'flex',alignItems:'center',gap:'10px',transition:'all .2s'}}>
                      <input type="radio" name="payment" value={key} checked={payMethod === key} onChange={() => setPayMethod(key)} style={{accentColor:'var(--primary)'}} />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>

                <div style={{background:'#f0faf0',borderRadius:'10px',padding:'12px 16px',fontSize:'.82rem',color:'#1e7e44',display:'flex',gap:'8px',marginBottom:'20px'}}>
                  🔒 Your payment is 100% secure. Powered by Razorpay PCI-DSS Level 1 certified gateway.
                </div>
                <button className="btn btn-gold btn-lg" style={{width:'100%',justifyContent:'center',fontSize:'1.1rem'}} onClick={confirmPayment}>
                  💳 Pay ₹800 &amp; Confirm Appointment
                </button>
                <p style={{textAlign:'center',fontSize:'.78rem',color:'var(--text-gray)',marginTop:'12px'}}>By proceeding, you agree to our <Link to="/about" style={{color:'var(--primary)'}}>Terms of Service</Link></p>
              </div>
            )}

            {/* STEP 5: Confirmation */}
            {currentStep === 5 && (
              <div className="form-box" style={{textAlign:'center'}}>
                <div style={{fontSize:'4rem',marginBottom:'16px'}}>✅</div>
                <h2 style={{fontFamily:'var(--font-head)',color:'var(--navy)',marginBottom:'10px'}}>Appointment Confirmed!</h2>
                <div style={{background:'var(--mint)',borderRadius:'var(--radius)',padding:'20px',margin:'20px 0',textAlign:'left'}}>
                  {[
                    ['Appointment ID', apptId],
                    ['Doctor', dept ? doctorList[0] || 'Dr. Arvind Sharma' : 'Dr. Arvind Sharma'],
                    ['Date & Time', selectedSlot ? `${apptDate} ${selectedSlot}` : 'Scheduled'],
                    ['Status', '✅ Confirmed & Paid'],
                  ].map(([k, v]) => (
                    <div key={k} style={{display:'flex',justifyContent:'space-between',fontSize:'.88rem',padding:'6px 0',borderBottom:'1px solid var(--border)'}}>
                      <span style={{color:'var(--text-gray)'}}>{k}</span>
                      <strong style={k === 'Appointment ID' ? {color:'var(--primary)'} : {}}>{v}</strong>
                    </div>
                  ))}
                </div>
                <p style={{color:'var(--text-gray)',fontSize:'.9rem',marginBottom:'20px'}}>Confirmation sent to your mobile via <strong>SMS &amp; WhatsApp</strong>. Please arrive 15 minutes early with a valid photo ID.</p>
                <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
                  <button className="btn btn-primary" onClick={() => window.print()}>🖨️ Print / Download</button>
                  <Link to="/" className="btn btn-outline">🏠 Back to Home</Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section style={{background:'var(--mint)',padding:'48px 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'24px',textAlign:'center'}}>
            {[
              { icon: '📱', title: 'OTP Verified Login', desc: 'Secure mobile number verification' },
              { icon: '⚡', title: 'Live Slots via HIMS', desc: 'Real-time availability from hospital system' },
              { icon: '💳', title: 'Secure Online Payment', desc: 'Razorpay · UPI · Cards · Net Banking' },
              { icon: '💬', title: 'WhatsApp Confirmation', desc: 'Instant notification on WhatsApp & SMS' },
            ].map((f, i) => (
              <div key={i}>
                <div style={{fontSize:'2rem',marginBottom:'8px'}}>{f.icon}</div>
                <h5 style={{color:'var(--navy)',fontWeight:700}}>{f.title}</h5>
                <p style={{fontSize:'.82rem',color:'var(--text-gray)'}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

