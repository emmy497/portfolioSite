import { PROFILE, SKILLS } from '../data/profile'

const STACK_GROUPS = [
  { label: 'frontend', items: SKILLS.frontend },
  { label: 'backend', items: SKILLS.backend },
  { label: 'database', items: SKILLS.database },
  { label: 'testing & devops', items: SKILLS.devops },
]

export default function About() {
  return (
    <section className="about container" id="about">
      <div className="about__main">
        <p className="eyebrow">// 01. about</p>
        <h2 className="section-title">About Me</h2>
        <p className="about__copy">{PROFILE.summary}</p>
        <p className="about__edu">
          <span className="tok-p">education</span>: {PROFILE.education.degree} —{' '}
          {PROFILE.education.school}
        </p>
        <a className="btn btn--light" href={`mailto:${PROFILE.email}`}>
          Send a message
        </a>
      </div>

      <aside className="about__side">
        <p className="about__tag">
          <span className="about__slash" aria-hidden="true" />
          For Businesses, Start-ups, Teams.....
        </p>

        <dl className="stack">
          {STACK_GROUPS.map((group) => (
            <div className="stack__group" key={group.label}>
              <dt>{group.label}</dt>
              <dd>
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  )
}
