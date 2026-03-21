import { useEffect, useRef } from 'react'
import './About.css'

const SKILLS = {
  'Data & AI':    ['Data Engineering', 'Data Architecture', 'Data Science', 'ML / DL / GenAI', 'Data Governance', 'AI Engineer', 'MLOps Engineer'],
  'Cloud & Platforms': ['GCP / AWS / Azure', 'Databricks', 'BigQuery', 'Snowflake', 'Splunk ITSI'],
  'AI Solutions': ['Claude Code', 'OpenClaw', 'Lovable', 'ChatGPT', 'Strawberry AI', 'HuggingFace', 'Sana', 'Suno', 'ElevenLabs'],
  'Leadership':   ['Team Building', 'Talent Management', 'C-level Advisory', 'Data Strategy', 'Transformation Leadership'],
}

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">01. About</p>
          <h2 className="section-title">Who I am</h2>
        </div>

        <div className="about__grid">
          {/* Text column */}
          <div className="about__bio">
            <p className="reveal reveal-delay-1">
              Data &amp; AI leader with 8+ years driving data transformation
              across finance, tech, and investment sectors. I have a proven
              track record of building highly efficient teams, delivering
              enterprise platforms, and enabling C-level decisions through
              data strategy and AI solutions.
            </p>
            <p className="reveal reveal-delay-2">
              My experience spans hands-on development, architecture,
              integrations, security, quality assurance, analytics, and AI —
              from individual contributor to director-level leadership. I thrive
              at the intersection of technical rigour and business impact.
            </p>
            <p className="reveal reveal-delay-3">
              My greatest passion is <strong>scaling organisations</strong> and
              aligning data strategy with business growth, by enabling teams
              through innovation and collaboration. Based in{' '}
              <strong>Stockholm, Sweden</strong>.
            </p>

            {/* Quick stats */}
            <div className="about__stats reveal reveal-delay-4">
              {[
                { value: '8+',  label: 'Years experience' },
                { value: '30+', label: 'Mentees / coach adepts' },
                { value: '100+', label: 'Assignments generated' },
              ].map(({ value, label }) => (
                <div className="about__stat" key={label}>
                  <span className="about__stat-value">{value}</span>
                  <span className="about__stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills column */}
          <div className="about__skills">
            {Object.entries(SKILLS).map(([category, items], ci) => (
              <div
                className={`about__skill-group reveal reveal-delay-${ci + 1}`}
                key={category}
              >
                <h4 className="about__skill-category">{category}</h4>
                <div className="about__skill-tags">
                  {items.map(skill => (
                    <span className="tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
