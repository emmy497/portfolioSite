import type { Project } from '../data/profile'

type Props = {
  project: Project
  className?: string
}

// Textured frame with a dark "browser window" inside, used for project previews.
export default function BrowserMock({ project, className = '' }: Props) {
  const host = project.url ? new URL(project.url).host : 'private · client work'

  return (
    <div className={`project__media ${className}`}>
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
    </div>
  )
}
