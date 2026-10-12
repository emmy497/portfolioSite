import type { ReactNode } from 'react'
import Header from './Header'
import HeroBackground from './HeroBackground'
import { PROFILE } from '../data/profile'

const k = (s: string) => <span className="tok-k">{s}</span>
const v = (s: string) => <span className="tok-v">{s}</span>
const p = (s: string) => <span className="tok-p">{s}</span>
const s = (str: string) => <span className="tok-s">'{str}'</span>
const c = (str: string) => <span className="tok-c">{str}</span>

const CODE_LINES: ReactNode[] = [
  c('// hello, world'),
  <>{k('const')} {v('emmanuel')} = {'{'}</>,
  <>  {p('role')}: {s('Full-Stack Engineer')},</>,
  <>  {p('frontend')}: [{s('React')}, {s('TypeScript')},</>,
  <>    {s('TanStack Query')}, {s('Tailwind')}],</>,
  <>  {p('backend')}: [{s('Node.js')}, {s('Express')},</>,
  <>    {s('Python')}, {s('REST APIs')}],</>,
  <>  {p('database')}: [{s('MongoDB')}, {s('MySQL')}],</>,
  <>  {p('auth')}: [{s('JWT')}, {s('OAuth 2.0')}, {s('OTP')}],</>,
  <>  {p('testing')}: [{s('Vitest')}, {s('Supertest')}],</>,
  <>  {p('cloud')}: [{s('Vercel')}, {s('Render')},</>,
  <>    {s('Cloudinary')}],</>,
  <>  {p('education')}: {s('B.Sc. (Hons) CS, UNILAG')},</>,
  <>{'}'}</>,
  '',
  <>{k('export default')} {v('emmanuel')}</>,
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <HeroBackground />

      <Header />

      <div className="hero__content container">
        <div className="hero__text">
          <p className="eyebrow eyebrow--dark">
            {'<'}Hi, I’m {PROFILE.name} {'/>'}
          </p>
          <h1 className="hero__title">
            I Am A Full-Stack
            <br />
            Software Engineer<span className="caret" aria-hidden="true" />
          </h1>
          <div className="btn-row">
            <a className="btn btn--outline" href={PROFILE.resume} download>
              Download Resume
            </a>
            <a className="btn btn--dark" href={`mailto:${PROFILE.email}`}>
              Send a DM
            </a>
          </div>
        </div>

        <div className="hero__editor">
          <div className="editor" role="img" aria-label="Code snippet describing Emmanuel: Software Engineer working with React, TypeScript, Node.js and Python">
            <div className="editor__bar">
              <span className="editor__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="editor__tab">emmanuel.ts</span>
            </div>
            <pre className="editor__code" aria-hidden="true">
              {CODE_LINES.map((line, i) => (
                <div className="editor__line" key={i}>
                  <span className="editor__ln">{i + 1}</span>
                  <code>{line}</code>
                </div>
              ))}
            </pre>
            <div className="editor__status" aria-hidden="true">
              <span>● TypeScript</span>
              <span>main</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
