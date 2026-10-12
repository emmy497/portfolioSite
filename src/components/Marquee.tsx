import { PROFILE } from '../data/profile'

type BandProps = {
  items: string[]
  variant: 'front' | 'back'
  reverse?: boolean
}

function Band({ items, variant, reverse }: BandProps) {
  // Repeat enough times to overflow wide screens, then duplicate for a seamless loop.
  const repeats = Math.ceil(16 / items.length)
  const run = Array.from({ length: repeats }, () => items).flat()

  return (
    <div className={`band band--${variant}`}>
      <div className={`band__track${reverse ? ' band__track--reverse' : ''}`}>
        {[0, 1].map((copy) => (
          <ul className="band__list" key={copy} aria-hidden={copy === 1}>
            {run.map((item, i) => (
              <li key={i}>
                {item}
                <span className="dot" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'TanStack Query',
    'Tailwind CSS',
    'Python',
    'REST APIs',
    'JWT & OAuth',
    'Vitest',
    'MySQL',
  ]
  const cta = ['Send A DM']

  return (
    <section className="marquee" id="contact">
      <div className="marquee__group marquee__group--top">
        <Band items={skills} variant="back" reverse />
        <Band items={skills} variant="front" />
      </div>

      <a className="btn btn--pill" href={`mailto:${PROFILE.email}`}>
        Send A DM
        <span className="dot" aria-hidden="true" />
      </a>

      <div className="marquee__group marquee__group--bottom">
        <Band items={cta} variant="back" />
        <Band items={cta} variant="front" reverse />
      </div>
    </section>
  )
}
