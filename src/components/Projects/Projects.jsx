import { useState, useEffect, useRef } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    title: 'Artuid',
    description:
      'AI-powered art robot built on IBM Watson. Generates unique generative artwork by combining machine learning models with creative algorithms, exploring the intersection of artificial intelligence and artistic expression.',
    tags: ['IBM Watson', 'AI', 'Generative Art', 'Machine Learning'],
    category: 'AI',
    github: null,
    live: null,
    featured: true,
  },
  {
    title: 'Gosswald',
    description:
      'Personal portfolio and experiment playground. Built with React and Vite — this site itself.',
    tags: ['React', 'Vite', 'CSS', 'GitHub Pages'],
    category: 'Web',
    github: 'https://github.com/TheGosswald/Gosswald',
    live: null,
    featured: true,
  },
]

const CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const sectionRef = useRef(null)

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeFilter)

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
      { threshold: 0.06 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">02. Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            A selection of personal projects. Work delivered for clients and
            through Netlight engagements remains confidential and is not
            publicly disclosed. This GitHub profile —&nbsp;
            <a
              href="https://github.com/TheGosswald"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              TheGosswald
            </a>
            &nbsp;— is a brand-new public profile created in 2026 for personal
            and open projects only.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="projects__filters reveal reveal-delay-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`projects__filter${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="projects__grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const { title, description, tags, github, live, featured } = project

  return (
    <article
      className={`project-card reveal reveal-delay-${(index % 4) + 1}${featured ? ' project-card--featured' : ''}`}
    >
      {featured && <span className="project-card__badge">Featured</span>}

      <div className="project-card__header">
        {/* Folder icon */}
        <svg className="project-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
        </svg>

        <div className="project-card__links">
          {github && github !== '#' && (
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub repo">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" aria-label="Live site">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>

      <div className="project-card__tags">
        {tags.map(tag => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>

      {github && github !== '#' && (
        <a
          className="project-card__github-link"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          View on GitHub
        </a>
      )}
    </article>
  )
}
