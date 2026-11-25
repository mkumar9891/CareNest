
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

              {/* Social Media Icons */}
              <div className="footer-social">

                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Facebook" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2.3H7v3.2h2.8V21h3.7Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="X (Twitter)" aria-label="X Twitter">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="YouTube" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1A4 4 0 0 1 16.8 8c4 0 4.7 2.6 4.7 6v7h-3.8v-6.2c0-1.5 0-3.5-2.1-3.5s-2.4 1.6-2.4 3.4V21H9.5V9Z" />
                  </svg>
                </a>

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
