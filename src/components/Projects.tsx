import { Link } from 'react-router'
import BrowserMock from './BrowserMock'
import { PROFILE, PROJECTS } from '../data/profile'

export function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M2 8 L8 2 M3 2 H8 V7" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section className="projects container" id="projects">
      <p className="eyebrow">// 02. projects</p>
      <h2 className="section-title">Top Projects</h2>

      <div className="projects__grid">
        {PROJECTS.map((project) => {
          const to = `/projects/${project.slug}`

          return (
            <article className="project" key={project.slug}>
              <Link to={to} aria-label={`${project.title} — view project details`}>
                <BrowserMock project={project} />
              </Link>

              <div className="project__body">
                <div>
                  <h3 className="project__title">
                    <Link to={to}>{project.title}</Link>
                  </h3>
                  <p className="project__desc">{project.description}</p>
                </div>
                <Link className="project__link" to={to}>
                  Details
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          )
        })}
      </div>

      <div className="btn-row">
        <a className="btn btn--light" href={PROFILE.github} target="_blank" rel="noreferrer">
          See More on GitHub
        </a>
        <a className="btn btn--dark" href={`mailto:${PROFILE.email}`}>
          Send a DM
        </a>
      </div>
    </section>
  )
}
