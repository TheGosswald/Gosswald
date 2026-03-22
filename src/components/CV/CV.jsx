import { useEffect, useRef } from 'react'
import './CV.css'

const EXPERIENCE = [
  {
    role: 'Data Strategy & Data Mesh Transformation',
    company: 'EQT — COO Office',
    type: 'assignment',
    period: '2024 — Present',
    location: 'Stockholm, Sweden',
    bullets: [
      'Led EQT\'s HR Data Strategy and implementation, strengthening operational efficiency and enabling advanced analytics for the C-suite, ExCom, and senior leadership.',
      'Established cross-functional collaboration to embed data and analytics in daily operations, resulting in a 430% increase in data-driven decision-making.',
      'Drove recruitment, consultancy selection, and team development for the Warsaw office launch.',
    ],
  },
  {
    role: 'Manager & Director — Data Consultant',
    company: 'Netlight',
    type: 'employer',
    period: '2021 — Present',
    location: 'Stockholm, Sweden',
    bullets: [
      'Directed and delivered strategic data, finance, and AI assignments while managing 9 employees and mentoring consultants for career development.',
      'Oversaw successful deliveries for 10+ clients, generating roughly 100+ new assignments. Supported international expansion across Toronto and Copenhagen offices.',
      'Expanded revenue streams through sales, recruitment, and internal training programs while fostering a strong data community.',
    ],
  },
  {
    role: 'Team Lead — Data & Analytics',
    company: 'Confidential Client (Mega Fund)',
    type: 'assignment',
    period: '2023 — 2024',
    location: 'Stockholm, Sweden',
    bullets: [
      'Directed a team of six engineers to design and implement a centralised Databricks data platform on AWS supporting petabyte-scale analytics.',
      'Developed exit strategy dashboards in Tableau providing portfolio managers with actionable insights on target prices for individual holdings.',
      'Implemented alerting on portfolio outliers, strengthening risk management and organisational responsiveness.',
    ],
  },
  {
    role: 'Domain Architect',
    company: 'Klarna',
    type: 'assignment',
    period: '2022 — 2023',
    location: 'Stockholm, Sweden',
    bullets: [
      'Partnered with CEO & COO to redesign enterprise architecture, integrating finance, recruitment, and access systems into a unified Single Source of Truth.',
      'Established data governance and platform administration for self-service analytics, achieving a 70% cost reduction through strong ownership and optimisation.',
      'Introduced workforce analytics capabilities and set the foundation for thoughtful GenAI adoption.',
    ],
  },
  {
    role: 'Senior Data Engineer',
    company: 'Rocker',
    type: 'assignment',
    period: '2021 — 2022',
    location: 'Stockholm, Sweden',
    bullets: [
      'Redesigned legacy data lakehouse into a structured, maintainable data warehouse using galaxy architecture.',
      'Established the data & analytics function, including business analytics reporting directly to CTO, CFO & CEO.',
    ],
  },
  {
    role: 'Data Project Lead & Data Scientist — AIOps',
    company: 'SEB',
    type: 'employer',
    period: '2019 — 2021',
    location: 'Stockholm, Sweden',
    bullets: [
      'Drove strategic project planning to improve IT incident resolution across 2,000+ bank applications.',
      'Procured Splunk ITSI and delivered custom and out-of-the-box ML & AI solutions for bank-wide observability.',
      'Developed machine learning models, anomaly detection, and operational insights for performance monitoring.',
    ],
  },
]

const EDUCATION = [
  {
    degree: 'MSc Engineering — Robotics',
    school: 'KTH Royal Institute of Technology',
    period: '2017 — 2019',
    note: 'Masters of Science in Engineering, specialising in Robotics and autonomous systems.',
  },
  {
    degree: 'BSc Mechanical Engineering',
    school: 'KTH Royal Institute of Technology',
    period: '2014 — 2017',
    note: 'Bachelor of Science in Mechanical Engineering.',
  },
  {
    degree: 'Module of: BSc Business Economics',
    school: 'Stockholm University',
    period: '2015 — 2017',
    note: 'Module programme in Business Economics.',
  },
]

export default function CV() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cv section" id="cv" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">03. Experience</p>
          <h2 className="section-title">My journey</h2>
          <p className="section-subtitle">
            Where I've worked and studied, and what I've built along the way.
          </p>
        </div>

        <div className="cv__columns">
          {/* Experience */}
          <div className="cv__section">
            <h3 className="cv__section-title reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
              </svg>
              Work Experience
            </h3>

            <div className="cv__timeline">
              {EXPERIENCE.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="cv__section">
            <h3 className="cv__section-title reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Education
            </h3>

            <div className="cv__timeline">
              {EDUCATION.map((item, i) => (
                <TimelineItem key={i} item={{ ...item, role: item.degree, company: item.school, bullets: item.note ? [item.note] : [] }} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }) {
  return (
    <div className={`timeline-item reveal reveal-delay-${index + 1}`}>
      <div className="timeline-item__dot" />
      <div className="timeline-item__content">
        <div className="timeline-item__meta">
          <span className="timeline-item__period">{item.period}</span>
          {item.location && (
            <span className="timeline-item__location">{item.location}</span>
          )}
          {item.type && (
            <span className={`timeline-item__badge timeline-item__badge--${item.type}`}>
              {item.type === 'employer' ? 'Employee' : 'Consultancy Assignment'}
            </span>
          )}
        </div>
        <h4 className="timeline-item__role">{item.role}</h4>
        <p className="timeline-item__company">{item.company}</p>
        {item.bullets && item.bullets.length > 0 && (
          <ul className="timeline-item__bullets">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
