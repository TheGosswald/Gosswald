import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About',     href: '#about'     },
  { label: 'Projects',  href: '#projects'  },
  { label: 'CV',        href: '#cv'        },
  { label: 'Mentoring', href: '#mentoring' },
  { label: 'Coaching',  href: '#coaching'  },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a
          className="navbar__logo"
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
        >
          <span className="navbar__logo-bracket">&lt;</span>
          GO
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                className={`navbar__link${active === href.slice(1) ? ' navbar__link--active' : ''}`}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          className="btn btn-outline navbar__cta"
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
        >
          Get in touch
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`}>
        <ul>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
