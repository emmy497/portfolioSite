import type { CSSProperties, ReactNode } from 'react'
import Header from './Header'
import { PROFILE } from '../data/profile'

// Grid cells (column, row) that get a soft white highlight, matching the design.
const HIGHLIGHT_CELLS: [number, number][] = [
  [5, 1], [6, 1], [8, 1], [9, 1],
  [3, 2], [6, 2], [8, 2],
  [10, 3],
  [2, 5], [5, 5], [6, 5], [7, 5], [9, 5],
  [3, 6], [5, 6], [9, 6],
  [1, 7], [3, 7], [7, 7], [8, 7], [12, 7],
]

const k = (s: string) => <span className="tok-k">{s}</span>
const v = (s: string) => <span className="tok-v">{s}</span>
const p = (s: string) => <span className="tok-p">{s}</span>
const s = (str: string) => <span className="tok-s">'{str}'</span>
const c = (str: string) => <span className="tok-c">{str}</span>

const CODE_LINES: ReactNode[] = [
  c('// hello, world 👋'),
  <>{k('const')} {v('emmanuel')} = {'{'}</>,
  <>  {p('role')}: {s('Software Engineer')},</>,
  <>  {p('stack')}: [{s('React')}, {s('TypeScript')},</>,
  <>          {s('Node.js')}, {s('Python')}],</>,
  <>  {p('education')}: {s('B.Sc. CS, UNILAG')},</>,
  <>  {p('now')}: {s('Full-Stack Dev @ TechStudio')},</>,
  <>  {p('loves')}: [{s('clean UI')}, {s('teaching')}],</>,
  <>{'}'}</>,
  '',
  <>{k('export default')} {v('emmanuel')}</>,
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blobs" />
        {HIGHLIGHT_CELLS.map(([col, row]) => (
          <span
            key={`${col}-${row}`}
            className="hero__cell"
            style={{ '--col': col, '--row': row } as CSSProperties}
          />
        ))}
        <div className="hero__grid" />
      </div>

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
              <span>main ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
