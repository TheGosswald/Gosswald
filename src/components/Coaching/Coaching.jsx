import { useEffect, useRef } from 'react'
import './Coaching.css'

const base = import.meta.env.BASE_URL

const LOGOS = [
  { id: 1,  src: `${base}logos/odevo.png`,       alt: 'Odevo'              },
  { id: 2,  src: `${base}logos/ica.png`,          alt: 'ICA'                },
  { id: 3,  src: `${base}logos/AF.png`,           alt: 'Arbetsförmedlingen' },
  { id: 4,  src: `${base}logos/postnord.png`,     alt: 'PostNord'           },
  { id: 5,  src: `${base}logos/eqt.png`,          alt: 'EQT'                },
  { id: 6,  src: `${base}logos/sandvik.png`,      alt: 'Sandvik'            },
  { id: 7,  src: `${base}logos/SEB.png`,          alt: 'SEB'                },
  { id: 8,  src: `${base}logos/areaim.png`,       alt: 'Areim'              },
  { id: 9,  src: `${base}logos/BC.png`,           alt: 'Banking Circle'     },
  { id: 10, src: `${base}logos/netlight.png`,     alt: 'Netlight'           },
]

const AREAS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Data Strategy',
    description:
      'Helping organisations define, prioritise, and execute a coherent data strategy — from governance frameworks and data mesh design to platform selection and roadmapping.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Transformation Leadership',
    description:
      'Guiding leaders through complex data and AI transformation programmes — aligning stakeholders, managing change, and embedding data-driven culture across the organisation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Team Building & Scaling',
    description:
      'Coaching data leaders on how to recruit, structure, and scale high-performing data teams — including setting up functions from scratch, talent pipelines, and retention strategies.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'C-suite Advisory',
    description:
      'Enabling executive teams to make confident, data-driven decisions — including framing data ROI, presenting to boards, and bridging the gap between technical teams and senior leadership.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
    title: 'AI & GenAI Adoption',
    description:
      'Coaching organisations and leaders on how to adopt AI and GenAI thoughtfully — identifying high-value use cases, building internal capability, and managing risk.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Analytics & Reporting',
    description:
      'Setting up analytics functions, self-service reporting, and data products that deliver measurable business value — with strong governance and cost ownership from day one.',
  },
]

export default function Coaching() {
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
    <section className="coaching section" id="coaching" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">05. Coaching</p>
          <h2 className="section-title">Strategic clarity for leaders</h2>
          <p className="section-subtitle">
            Drawing on hands-on experience leading data transformations at EQT,
            Klarna, and a global hedge fund — I coach organisations and data
            leaders who need a trusted, external perspective to move faster and
            with more confidence.
          </p>
        </div>

        <div className="coaching__grid">
          {AREAS.map((item, i) => (
            <div
              key={item.title}
              className={`coaching__card reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="coaching__card-icon">{item.icon}</div>
              <h3 className="coaching__card-title">{item.title}</h3>
              <p className="coaching__card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Client logo ribbon */}
        <div className="coaching__clients reveal">
          <h3 className="coaching__clients-title">Organisations I've coached at</h3>
          <div className="coaching__ribbon-wrap">
            <div className="coaching__ribbon-track">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div key={`${logo.id}-${i}`} className="coaching__ribbon-item">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
