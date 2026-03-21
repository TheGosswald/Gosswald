import { useState, useEffect } from 'react'
import './Hero.css'

const TYPED_WORDS = [
  'Data & AI Leader',
  'AI & Data Transformation Leader',
  'Mentor & Coach',
]

export default function Hero() {
  const [wordIndex, setWordIndex]   = useState(0)
  const [charIndex, setCharIndex]   = useState(0)
  const [deleting,  setDeleting]    = useState(false)
  const [displayed, setDisplayed]   = useState('')

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex]
    let timeout

    if (!deleting) {
      if (charIndex < word.length) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        }, 65)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        }, 35)
      } else {
        setDeleting(false)
        setWordIndex(i => (i + 1) % TYPED_WORDS.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      {/* Animated grid background */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Glows */}
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="hero__content container">
        {/* Text column */}
        <div className="hero__text">
          <h1 className="hero__name">
            Gustav Osswald<span className="hero__name-dot">.</span>
          </h1>

          <h2 className="hero__title">
            <span className="hero__typed">{displayed}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </h2>

          <p className="hero__description">
            Data &amp; AI leader with 8+ years driving data transformation across
            finance, tech, and investment sectors. I build high-performing teams,
            deliver enterprise data platforms, and enable C-level decisions through
            data strategy and AI, turning data and AI solutions into value creating functions.
          </p>

          <div className="hero__actions">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View my work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1l7 7-7 7M1 8h14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="btn btn-outline" onClick={scrollToContact}>
              Contact me
            </button>
          </div>

          <div className="hero__social">
            <a href="https://github.com/TheGosswald" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/gustav-osswald-8a926b173/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:gustav.osswald@gmail.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Profile image column */}
        <div className="hero__image-wrap">
          <div className="hero__image-ring">
            {/* Add your photo as public/profile.jpg */}
            <img
              src="/profile.jpg"
              alt="Gustav Osswald"
              className="hero__photo"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
            />
            <div className="hero__photo-fallback" style={{ display: 'none' }}>GO</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
