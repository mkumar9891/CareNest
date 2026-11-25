import { Link } from 'react-router-dom'

const screenReaders = [
  { name: 'NVDA (NonVisual Desktop Access)', platform: 'Windows', type: 'Free / Open Source', url: 'https://www.nvaccess.org/' },
  { name: 'JAWS (Job Access With Speech)', platform: 'Windows', type: 'Commercial', url: 'https://www.freedomscientific.com/products/software/jaws/' },
  { name: 'Windows Narrator', platform: 'Windows (Built-in)', type: 'Free', url: 'https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f1090835' },
  { name: 'VoiceOver', platform: 'macOS / iOS (Built-in)', type: 'Free', url: 'https://www.apple.com/accessibility/vision/' },
  { name: 'TalkBack', platform: 'Android (Built-in)', type: 'Free', url: 'https://support.google.com/accessibility/android/answer/6283677' },
]

export default function ScreenReaderAccess() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Screen Reader Access</span></div>
          <h1>Screen Reader Access</h1>
          <p>
            CareNest Hospital is committed to making healthcare information accessible to everyone in compliance with WCAG 2.1 Level AA guidelines.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow)', marginBottom: '32px' }}>
            <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Supported Screen Readers</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>
              This website is compatible with assistive technologies including screen readers, magnifiers, and speech recognition software.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--mint)', color: 'var(--navy)' }}>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--border)' }}>Screen Reader</th>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--border)' }}>Platform</th>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--border)' }}>License</th>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--border)' }}>Website</th>
                  </tr>
                </thead>
                <tbody>
                  {screenReaders.map(sr => (
                    <tr key={sr.name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 600 }}>{sr.name}</td>
                      <td style={{ padding: '12px 16px' }}>{sr.platform}</td>
                      <td style={{ padding: '12px 16px' }}>{sr.type}</td>
                      <td style={{ padding: '12px 16px' }}>
                        <a href={sr.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>
                          Visit Official Site ↗
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '24px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ color: 'var(--navy)', marginBottom: '10px' }}>Keyboard Shortcuts</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-gray)' }}>
                <li><strong>Tab</strong>: Move to next interactive element</li>
                <li><strong>Shift + Tab</strong>: Move to previous element</li>
                <li><strong>Enter / Space</strong>: Activate buttons and links</li>
                <li><strong>Esc</strong>: Close search bar or mobile menu</li>
              </ul>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '24px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ color: 'var(--navy)', marginBottom: '10px' }}>Accessibility Controls</h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '14px' }}>
                Use the top accessibility bar to skip to main content, increase text spacing, resize text, switch to high contrast or grayscale mode, or search the site.
              </p>
              <Link to="/contact" className="btn btn-primary btn-sm">Report Accessibility Issue</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

