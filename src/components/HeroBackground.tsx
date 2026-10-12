import type { CSSProperties } from 'react'

// Grid cells (column, row) that get a soft white highlight, matching the design.
const HIGHLIGHT_CELLS: [number, number][] = [
  [5, 1], [6, 1], [8, 1], [9, 1],
  [3, 2], [6, 2], [8, 2],
  [10, 3],
  [2, 5], [5, 5], [6, 5], [7, 5], [9, 5],
  [3, 6], [5, 6], [9, 6],
  [1, 7], [3, 7], [7, 7], [8, 7], [12, 7],
]

export default function HeroBackground() {
  return (
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
  )
}
