import { Link } from 'react-router-dom'

export default function Footer() {
  const handleSubscribe = () => alert('Subscribed! Thank you.')

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: '12px' }}>
                <Link to="/" className="logo" aria-label="CureNest Multispeciality Hospital Home">
                  <img
                    src="/cure_nest-healthcare-logo-f.png"
                    alt="CureNest Healthcare Logo"
                    className="brand-img"
                  />
                </Link>
              </div>
              <p>India's trusted multi-specialty hospital network, delivering compassionate and cutting-edge healthcare since 2010. NABH Accredited · JCI Certified.</p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Facebook" aria-label="Facebook">📘</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram" aria-label="Instagram">📸</a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Twitter/X" aria-label="Twitter or X">🐦</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="YouTube" aria-label="YouTube">▶️</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn" aria-label="LinkedIn">💼</a>
              </div>
            </div>
            <div className="footer-col">
              <h6>Quick Links</h6>
              <ul>
                <li><Link to="/about">About CareNest</Link></li>
                <li><Link to="/specialities">Our Specialities</Link></li>
                <li><Link to="/doctors">Find a Doctor</Link></li>
                <li><Link to="/packages">Health Packages</Link></li>
                <li><Link to="/teleconsult">Teleconsult</Link></li>
                <li><Link to="/blog">Health Blog</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/appointment">Book Appointment</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h6>Contact Us</h6>
              <ul>
                <li><a href="tel:+9118001600300">📞 1800-1600-300</a></li>
                <li><a href="mailto:care@curenest.in">✉️ care@curenest.in</a></li>
                <li><Link to="/contact#map">📍 Sector 44, Gurugram, Haryana</Link></li>
                <li><Link to="/appointment">🕐 OPD: Mon–Sat 8AM–8PM</Link></li>
                <li><a href="tel:108">🚑 Emergency: 24/7</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h6>Newsletter</h6>
              <p style={{ fontSize: '.82rem', opacity: '.7', marginBottom: '12px' }}>Get health tips, news &amp; exclusive offers every week.</p>
              <div className="footer-newsletter">
                <input type="email" placeholder="Your email address" />
                <button className="btn btn-primary btn-sm" onClick={handleSubscribe}>Subscribe →</button>
              </div>
              <h6 style={{ marginTop: '24px' }}>Emergency</h6>
              <a href="tel:108" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold)' }}>📞 108</a>
              <p style={{ fontSize: '.78rem', opacity: '.6', marginTop: '4px' }}>Ambulance · 24/7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <span>© 2026 CureNest Hospitals Pvt. Ltd. All rights reserved.</span>
          <span>
            <Link to="/screen-reader-access" style={{ color: 'inherit' }}>Accessibility</Link> ·{' '}
            <Link to="/about" style={{ color: 'inherit' }}>About Us</Link> ·{' '}
            <Link to="/contact" style={{ color: 'inherit' }}>Contact</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

