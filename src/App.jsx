import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AccessibilityProvider } from './context/AccessibilityContext'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollTop from './components/ScrollTop'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Specialities from './pages/Specialities'
import Packages from './pages/Packages'
import Teleconsult from './pages/Teleconsult'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Appointment from './pages/Appointment'
import ScreenReaderAccess from './pages/ScreenReaderAccess'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1)
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 60)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <AccessibilityProvider>
      <ScrollManager />
      <WhatsAppFloat />
      <ScrollTop />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/teleconsult" element={<Teleconsult />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/screen-reader-access" element={<ScreenReaderAccess />} />
        </Routes>
      </main>
      <Footer />
    </AccessibilityProvider>
  )
}
