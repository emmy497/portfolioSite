import { CERTIFICATES, EXPERIENCE, VOLUNTEERING } from '../data/profile'

export default function Experience() {
  return (
    <section className="experience container" id="experience">
      <p className="eyebrow">// 03. experience</p>
      <h2 className="section-title">Experience</h2>
      <p className="experience__cmd">
        <span className="tok-c">$</span> git log --author="emmanuel" --oneline
      </p>

      <ol className="timeline">
        {EXPERIENCE.map((job) => (
          <li className="timeline__item" key={job.company}>
            <p className="timeline__period">{job.period}</p>
            <div className="timeline__body">
              <h3 className="timeline__role">
                {job.role} <span className="timeline__at">@</span> {job.company}
              </h3>
              <ul className="timeline__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="creds">
        <div className="creds__card">
          <h3 className="creds__title">
            <span className="tok-c">{'>'}</span> certificates
          </h3>
          <ul>
            {CERTIFICATES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="creds__card">
          <h3 className="creds__title">
            <span className="tok-c">{'>'}</span> volunteering
          </h3>
          <ul>
            {VOLUNTEERING.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
