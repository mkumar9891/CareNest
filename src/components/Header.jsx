import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAccessibility } from '../context/AccessibilityContext'

const SEARCH_ITEMS = [
  { title: 'Home', path: '/', keywords: 'home hospital carenest emergency' },
  { title: 'About CareNest', path: '/about', keywords: 'about mission vision leadership hospital' },
  { title: 'Specialities & Departments', path: '/specialities', keywords: 'cardiology orthopedics neurology oncology pediatrics specialities' },
  { title: 'Find a Doctor', path: '/doctors', keywords: 'doctors specialists cardiologist neurologist surgeon' },
  { title: 'Health Packages', path: '/packages', keywords: 'packages checkup diabetes women senior executive' },
  { title: 'Teleconsult (Video Consultation)', path: '/teleconsult', keywords: 'teleconsult online video doctor consultation' },
  { title: 'Health Blog', path: '/blog', keywords: 'blog articles heart diabetes nutrition mental health' },
  { title: 'Careers at CareNest', path: '/careers', keywords: 'careers jobs openings nurse doctor technician' },
  { title: 'Contact Us & 24/7 Emergency', path: '/contact', keywords: 'contact address phone email emergency map' },
  { title: 'Book Appointment', path: '/appointment', keywords: 'book appointment opd slot schedule' },
  { title: 'Patient Login / Register', path: '/login', keywords: 'login register account patient portal' },
  { title: 'Screen Reader Access', path: '/screen-reader-access', keywords: 'screen reader wcag accessibility keyboard nvda jaws' },
]

const LABELS = {
  en: {
    skip: 'Skip to main content',
    screenReader: 'Screen Reader Access',
    home: 'Home',
    about: 'About',
    specialities: 'Specialities',
    doctors: 'Doctors',
    packages: 'Packages',
    teleconsult: 'Teleconsult',
    blog: 'Blog',
    careers: 'Careers',
    contact: 'Contact',
    login: 'Login',
    book: 'Book Appointment',
    langToggle: 'हिंदी',
    searchPlaceholder: 'Search doctors, specialities, packages, pages...',
    searchBtn: 'Search',
  },
  hi: {
    skip: 'मुख्य सामग्री पर जाएं',
    screenReader: 'स्क्रीन रीडर एक्सेस',
    home: 'होम',
    about: 'हमारे बारे में',
    specialities: 'विशेषताएं',
    doctors: 'डॉक्टर्स',
    packages: 'हेल्थ पैकेज',
    teleconsult: 'टेलीकंसल्ट',
    blog: 'ब्लॉग',
    careers: 'करियर',
    contact: 'संपर्क करें',
    login: 'लॉगिन',
    book: 'अपॉइंटमेंट बुक करें',
    langToggle: 'English',
    searchPlaceholder: 'डॉक्टर, विशेषताएं, पैकेज या पेज खोजें...',
    searchBtn: 'खोजें',
  },
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchInputRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const {
    textSpacing,
    fontSize,
    contrast,
    lang,
    toggleTextSpacing,
    cycleFontSize,
    changeContrast,
    toggleLang,
  } = useAccessibility()

  const t = LABELS[lang] || LABELS.en

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  const isActive = (path) => (location.pathname === path ? 'active' : '')

  const handleSkipToMain = (e) => {
    e.preventDefault()
    const main = document.getElementById('main-content')
    if (main) {
      main.focus({ preventScroll: false })
      main.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const filteredSearch = query.trim()
    ? SEARCH_ITEMS.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (filteredSearch.length > 0) {
      navigate(filteredSearch[0].path)
      setSearchOpen(false)
      setQuery('')
    }
  }

  return (
    <header id="mainHeader" className={scrolled ? 'scrolled' : ''}>
      {/* WCAG Accessibility Top Bar */}
      <div className="wcag-top-bar" role="region" aria-label="Accessibility tools">
        <div className="container wcag-top-inner">
          <div className="wcag-left-links">
            <a
              href="#main-content"
              className="wcag-yellow-link"
              onClick={handleSkipToMain}
            >
              <span className="wcag-icon-yellow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3 2.5v11l8-5.5-8-5.5zm9 0h1.5v11H12v-11z" />
                </svg>
              </span>
              <span>{t.skip}</span>
            </a>

            <Link to="/screen-reader-access" className="wcag-yellow-link">
              <span className="wcag-icon-yellow" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              </span>
              <span>{t.screenReader}</span>
            </Link>
          </div>

          <div className="wcag-controls" role="toolbar" aria-label="Display and language controls">
            <button
              type="button"
              className={`wcag-tool-btn wcag-btn-white${textSpacing ? ' is-selected' : ''}`}
              onClick={toggleTextSpacing}
              aria-pressed={textSpacing}
              aria-label="Toggle text spacing"
              title="Text Spacing"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h16M12 6v12M5 17l-2 2 2 2M19 17l2 2-2 2M3 19h18" />
              </svg>
            </button>

            <button
              type="button"
              className={`wcag-tool-btn wcag-btn-white${fontSize !== 'normal' ? ' is-selected' : ''}`}
              onClick={cycleFontSize}
              aria-label={`Change text size (current: ${fontSize})`}
              title={`Text Size: ${fontSize}`}
            >
              <span className="wcag-tt-icon" aria-hidden="true">
                <strong>T</strong><small>T</small>
              </span>
            </button>

            <button
              type="button"
              className={`wcag-tool-btn wcag-btn-white${contrast === 'default' ? ' is-selected' : ''}`}
              onClick={() => changeContrast('default')}
              aria-pressed={contrast === 'default'}
              aria-label="Default color theme"
              title="Default View"
            >
              <span className="wcag-a-underlined" aria-hidden="true">A</span>
            </button>

            <button
              type="button"
              className={`wcag-tool-btn wcag-btn-black${contrast === 'high-contrast' ? ' is-selected' : ''}`}
              onClick={() => changeContrast('high-contrast')}
              aria-pressed={contrast === 'high-contrast'}
              aria-label="High contrast dark mode"
              title="High Contrast"
            >
              <span className="wcag-a-underlined" aria-hidden="true">A</span>
            </button>

            <button
              type="button"
              className={`wcag-tool-btn wcag-btn-gray${contrast === 'grayscale' ? ' is-selected' : ''}`}
              onClick={() => changeContrast('grayscale')}
              aria-pressed={contrast === 'grayscale'}
              aria-label="Grayscale mode"
              title="Grayscale"
            >
              <span className="wcag-a-underlined" aria-hidden="true">A</span>
            </button>

            <button
              type="button"
              className={`wcag-tool-btn wcag-btn-white${searchOpen ? ' is-selected' : ''}`}
              onClick={() => setSearchOpen((v) => !v)}
              aria-expanded={searchOpen}
              aria-controls="wcag-site-search"
              aria-label="Toggle site search"
              title="Search"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button
              type="button"
              className="wcag-lang-btn"
              onClick={toggleLang}
              aria-label={lang === 'en' ? 'Switch language to Hindi' : 'Switch language to English'}
            >
              {t.langToggle}
            </button>
          </div>
        </div>

        {/* Accessible Expandable Search Bar */}
        {searchOpen && (
          <div id="wcag-site-search" className="wcag-search-panel">
            <div className="container">
              <form className="wcag-search-form" role="search" onSubmit={handleSearchSubmit}>
                <label htmlFor="site-search-input" className="sr-only">
                  {t.searchPlaceholder}
                </label>
                <input
                  id="site-search-input"
                  ref={searchInputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                />
                <button type="submit" className="btn btn-primary btn-sm">
                  {t.searchBtn}
                </button>
                <button
                  type="button"
                  className="wcag-search-close"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                >
                  ✕
                </button>
              </form>
              {filteredSearch.length > 0 && (
                <ul className="wcag-search-results" aria-label="Search suggestions">
                  {filteredSearch.slice(0, 6).map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => {
                          setSearchOpen(false)
                          setQuery('')
                        }}
                      >
                        {item.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main Navigation Bar */}
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo" aria-label="CureNest Multispeciality Hospital Home">
            <img
              src="/cure_nest-healthcare-logo.png"
              alt="CureNest Healthcare Logo"
              className="brand-img"
            />
          </Link>

          <nav aria-label="Primary navigation">
            <Link to="/" className={isActive('/')}>{t.home}</Link>
            <Link to="/about" className={isActive('/about')}>{t.about}</Link>

            <div className="has-dropdown">
              <Link
                to="/specialities"
                className={isActive('/specialities')}
                aria-haspopup="true"
              >
                {t.specialities} ▾
              </Link>
              <div className="dropdown">
                <Link to="/specialities#cardiology">❤️ Cardiology</Link>
                <Link to="/specialities#orthopedics">🦴 Orthopedics</Link>
                <Link to="/specialities#neurology">🧠 Neurology</Link>
                <Link to="/specialities#oncology">🎗️ Oncology</Link>
                <Link to="/specialities#pediatrics">👶 Pediatrics</Link>
                <Link to="/specialities">View All →</Link>
              </div>
            </div>

            <Link to="/doctors" className={isActive('/doctors')}>{t.doctors}</Link>
            <Link to="/packages" className={isActive('/packages')}>{t.packages}</Link>
            <Link to="/teleconsult" className={isActive('/teleconsult')}>{t.teleconsult}</Link>
            <Link to="/blog" className={isActive('/blog')}>{t.blog}</Link>
            <Link to="/careers" className={isActive('/careers')}>{t.careers}</Link>
            <Link to="/contact" className={isActive('/contact')}>{t.contact}</Link>
          </nav>

          <div className="nav-actions">
            <Link to="/login" className="btn btn-outline btn-login">{t.login}</Link>
            <Link to="/appointment" className="btn btn-primary btn-appoint">{t.book}</Link>

            <button
              type="button"
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        <div id="mobile-nav" className={`mobile-nav${mobileOpen ? ' show' : ''}`} aria-label="Mobile navigation">
          <Link to="/">{t.home}</Link>
          <Link to="/about">{t.about}</Link>
          <Link to="/specialities">{t.specialities}</Link>
          <Link to="/doctors">{t.doctors}</Link>
          <Link to="/packages">{t.packages}</Link>
          <Link to="/teleconsult">{t.teleconsult}</Link>
          <Link to="/blog">{t.blog}</Link>
          <Link to="/careers">{t.careers}</Link>
          <Link to="/contact">{t.contact}</Link>
          <Link to="/login" className="btn btn-outline" style={{ marginTop: '10px', justifyContent: 'center' }}>{t.login}</Link>
          <Link to="/appointment" className="btn btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>{t.book}</Link>
        </div>
      </div>
    </header>
  )
}
