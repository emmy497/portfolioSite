import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import Header from '../components/Header'
import HeroBackground from '../components/HeroBackground'
import BrowserMock from '../components/BrowserMock'
import Divider from '../components/Divider'
import { ArrowIcon } from '../components/Projects'
import { PROJECTS } from '../data/profile'

export default function ProjectDetails() {
  const { slug } = useParams()
  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const project = PROJECTS[index]

  useEffect(() => {
    if (!project) return
    const previous = document.title
    document.title = `${project.title} — Emmy.dev`
    return () => {
      document.title = previous
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const next = PROJECTS[(index + 1) % PROJECTS.length]

  const liveDemo = project.url ? (
    <a className="btn btn--dark" href={project.url} target="_blank" rel="noreferrer">
      View Live Demo
      <ArrowIcon />
    </a>
  ) : (
    <span className="btn btn--disabled" aria-disabled="true">
      No public demo
    </span>
  )

  return (
    <>
      <section className="hero detail-hero">
        <HeroBackground />
        <Header />

        <div className="detail-hero__content container">
          <Link className="detail-hero__back" to="/#projects">
            ← cd ../projects
          </Link>
          <p className="eyebrow eyebrow--dark">// project {String(index + 1).padStart(2, '0')}</p>
          <h1 className="detail-hero__title">{project.title}</h1>
          <p className="detail-hero__overview">{project.overview}</p>
          <div className="btn-row">
            {liveDemo}
            <Link className="btn btn--outline" to="/#projects">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <main className="dark detail">
        <div className="detail__grid container">
          {project.url ? (
            <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
              <BrowserMock project={project} />
            </a>
          ) : (
            <BrowserMock project={project} />
          )}

          <aside className="detail__meta">
            <dl>
              <div>
                <dt>role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>context</dt>
                <dd>{project.context}</dd>
              </div>
              {project.period && (
                <div>
                  <dt>timeline</dt>
                  <dd>{project.period}</dd>
                </div>
              )}
              <div>
                <dt>stack</dt>
                <dd className="detail__stack">
                  {project.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt>live demo</dt>
                <dd>
                  {project.url ? (
                    <a className="detail__url" href={project.url} target="_blank" rel="noreferrer">
                      {new URL(project.url).host}
                      <ArrowIcon />
                    </a>
                  ) : (
                    <span className="detail__muted">Private — internal client work</span>
                  )}
                </dd>
              </div>
              {project.repos && (
                <div>
                  <dt>source code</dt>
                  <dd className="detail__repos">
                    {project.repos.map((repo) => (
                      <a
                        key={repo.url}
                        className="detail__url"
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {repo.label}
                        <ArrowIcon />
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
            {liveDemo}
          </aside>
        </div>

        {project.stats && (
          <ul className="detail__stats container" aria-label="Project at a glance">
            {project.stats.map((stat) => (
              <li key={stat.label}>
                <span className="detail__stat-value">{stat.value}</span>
                <span className="detail__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        )}

        <section className="detail__section container">
          <p className="eyebrow">// key features</p>
          <h2 className="section-title">What I Built</h2>
          <ul className="detail__list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {project.architecture && (
          <section className="detail__section container">
            <p className="eyebrow">// architecture</p>
            <h2 className="section-title">How It’s Built</h2>
            <ol className="arch">
              {project.architecture.map((layer, i) => (
                <li className="arch__layer" key={layer.layer}>
                  <span className="arch__index">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="arch__title">{layer.layer}</h3>
                  <div className="arch__items">
                    {layer.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {project.skills && (
          <section className="detail__section container">
            <p className="eyebrow">// advanced skills</p>
            <h2 className="section-title">Skills This Project Proves</h2>
            <div className="skills">
              {project.skills.map((skill) => (
                <article className="skill" key={skill.title}>
                  <h3 className="skill__title">{skill.title}</h3>
                  <p className="skill__body">{skill.body}</p>
                  <div className="skill__tags">
                    {skill.tags.map((tag) => (
                      <span className="chip chip--dark" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {project.decisions && (
          <section className="detail__section container">
            <p className="eyebrow">// engineering decisions</p>
            <h2 className="section-title">Smart Design Choices</h2>
            <ol className="decisions">
              {project.decisions.map((decision, i) => (
                <li className="decision" key={decision.title}>
                  <span className="decision__index">
                    decision_{String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="decision__title">{decision.title}</h3>
                  <p className="decision__body">{decision.body}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        <Divider />

        <nav className="detail__next container" aria-label="More projects">
          <Link to="/#projects" className="detail__next-back">
            ← All projects
          </Link>
          <Link to={`/projects/${next.slug}`} className="detail__next-link">
            <span className="eyebrow">next project</span>
            <span className="detail__next-title">
              {next.title} <span aria-hidden="true">→</span>
            </span>
          </Link>
        </nav>

        <Divider />
      </main>
    </>
  )
}
