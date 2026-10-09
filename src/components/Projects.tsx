import { PROFILE, PROJECTS } from '../data/profile'

function ArrowIcon() {
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
          const host = project.url ? new URL(project.url).host : 'private · client work'
          const Media = project.url ? 'a' : 'div'

          return (
            <article className="project" key={project.title}>
              <Media
                className="project__media"
                {...(project.url
                  ? { href: project.url, target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                <img src={project.frame} alt="" className="project__frame" />
                <div className="project__screen">
                  <div className="browser__bar">
                    <span className="editor__dots" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="browser__url">{host}</span>
                  </div>
                  <div className="browser__body">
                    <span className="browser__prompt">~/projects $ npm run dev</span>
                    <span className="browser__name">{project.title}</span>
                    <span className="browser__stack">
                      {project.stack.map((tech) => (
                        <span className="chip chip--dark" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </Media>

              <div className="project__body">
                <div>
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__desc">{project.description}</p>
                </div>
                {project.url ? (
                  <a className="project__link" href={project.url} target="_blank" rel="noreferrer">
                    Live
                    <ArrowIcon />
                  </a>
                ) : (
                  <span className="project__link project__link--muted">Private</span>
                )}
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
