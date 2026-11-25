import { createContext, useContext, useEffect, useState } from 'react'

const AccessibilityContext = createContext(null)

const FONT_SCALE = {
  normal: '16px',
  large: '18px',
  xlarge: '20px',
}

export function AccessibilityProvider({ children }) {
  const [textSpacing, setTextSpacing] = useState(() => localStorage.getItem('wcag_spacing') === 'true')
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('wcag_font') || 'normal')
  const [contrast, setContrast] = useState(() => localStorage.getItem('wcag_contrast') || 'default')
  const [lang, setLang] = useState(() => localStorage.getItem('wcag_lang') || 'en')
  const [announcement, setAnnouncement] = useState('')

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('wcag-text-spacing', textSpacing)
    localStorage.setItem('wcag_spacing', String(textSpacing))
  }, [textSpacing])

  useEffect(() => {
    const root = document.documentElement
    root.style.fontSize = FONT_SCALE[fontSize] || '16px'
    root.setAttribute('data-font-size', fontSize)
    localStorage.setItem('wcag_font', fontSize)
  }, [fontSize])

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', contrast)
    localStorage.setItem('wcag_contrast', contrast)
  }, [contrast])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('wcag_lang', lang)
  }, [lang])

  const toggleTextSpacing = () => {
    setTextSpacing(prev => {
      const next = !prev
      setAnnouncement(next ? 'Text spacing increased' : 'Text spacing reset to default')
      return next
    })
  }

  const cycleFontSize = () => {
    setFontSize(prev => {
      const order = ['normal', 'large', 'xlarge']
      const next = order[(order.indexOf(prev) + 1) % order.length]
      const labels = { normal: 'Normal (100%)', large: 'Large (112.5%)', xlarge: 'Extra Large (125%)' }
      setAnnouncement(`Text size set to ${labels[next]}`)
      return next
    })
  }

  const changeContrast = (mode) => {
    setContrast(mode)
    const labels = {
      default: 'Default color theme',
      'high-contrast': 'High contrast dark mode',
      grayscale: 'Grayscale mode',
    }
    setAnnouncement(`Display mode changed to ${labels[mode]}`)
  }

  const toggleLang = () => {
    setLang(prev => {
      const next = prev === 'en' ? 'hi' : 'en'
      setAnnouncement(next === 'hi' ? 'भाषा हिंदी में बदली गई' : 'Language switched to English')
      return next
    })
  }

  return (
    <AccessibilityContext.Provider
      value={{
        textSpacing,
        fontSize,
        contrast,
        lang,
        toggleTextSpacing,
        cycleFontSize,
        changeContrast,
        toggleLang,
      }}
    >
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  return useContext(AccessibilityContext)
}

