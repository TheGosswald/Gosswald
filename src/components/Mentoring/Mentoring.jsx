import { useEffect, useRef } from 'react'
import './Mentoring.css'

const MENTEES = [
  {
    name: 'Gabriel Gessle',
    title: 'Data Professional',
    linkedin: 'https://www.linkedin.com/in/gabriel-gessle/',
    initials: 'GG',
  },
]

const OFFERINGS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Career Navigation',
    description:
      'Helping data professionals map a clear growth path — whether moving from IC to lead, transitioning into a new domain, or aiming for director-level roles.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Technical Mentoring',
    description:
      'Hands-on guidance in data engineering, ML/AI, cloud architecture (GCP, AWS, Azure), and modern platforms like Databricks and Snowflake.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Leadership Development',
    description:
      'Practical support for transitioning from senior individual contributor to people leader — covering stakeholder management, team building, and executive communication.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Interview & CV Coaching',
    description:
      'Preparation for senior and leadership roles in data — from crafting a compelling CV to structuring your narrative for Head of Data, Principal, or Director interviews.',
  },
]

export default function Mentoring() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 90)
            })
          }
        })
      },
      { threshold: 0.06 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="mentoring section" id="mentoring" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">04. Mentoring</p>
          <h2 className="section-title">Grow with guidance</h2>
          <p className="section-subtitle">
            With 8+ years in data leadership — managing teams, delivering
            enterprise platforms, and developing consultants at Netlight — I
            offer 1-on-1 mentoring for data professionals who want to accelerate
            their growth with someone who has been there.
          </p>
        </div>

        <div className="mentoring__grid">
          {OFFERINGS.map((item, i) => (
            <div
              key={item.title}
              className={`mentoring__card reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="mentoring__card-icon">{item.icon}</div>
              <h3 className="mentoring__card-title">{item.title}</h3>
              <p className="mentoring__card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Mentees */}
        <div className="mentoring__mentees reveal">
          <h3 className="mentoring__mentees-title">Past mentees</h3>
          <p className="mentoring__mentees-sub">
            People I've mentored — feel free to reach out to them directly on LinkedIn.
          </p>
          <div className="mentoring__mentees-list">
            {MENTEES.map((m) => (
              <a
                key={m.name}
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mentoring__mentee-card"
              >
                <div className="mentoring__mentee-avatar">
                  <img
                    src={`/mentees/${m.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={m.name}
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                  />
                  <span style={{ display: 'none' }}>{m.initials}</span>
                </div>
                <div className="mentoring__mentee-info">
                  <span className="mentoring__mentee-name">{m.name}</span>
                  <span className="mentoring__mentee-title">{m.title}</span>
                </div>
                <svg className="mentoring__mentee-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mentoring__format reveal">
          <div className="mentoring__format-inner">
            <div className="mentoring__format-block">
              <h4>Format</h4>
              <p>Regular 1-on-1 sessions (video or in-person in Stockholm), typically bi-weekly. Tailored to your specific goals and situation.</p>
            </div>
            <div className="mentoring__format-block">
              <h4>Who it's for</h4>
              <p>Data engineers, data scientists, and analytics professionals looking to level up — whether technically, strategically, or into leadership.</p>
            </div>
            <div className="mentoring__format-block">
              <h4>How to start</h4>
              <p>Reach out with a short note about where you are and what you're aiming for. We'll schedule an intro call to see if it's a good fit.</p>
            </div>
          </div>
          <a
            className="btn btn-primary mentoring__cta"
            href="mailto:thegosswald@gmail.com?subject=Mentoring%20Enquiry"
          >
            Get in touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
