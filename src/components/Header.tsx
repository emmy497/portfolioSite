import { useState } from 'react'
import Logo from './Logo'
import { NAV_LINKS } from './navLinks'
import { PROFILE } from '../data/profile'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={`header container${open ? ' is-open' : ''}`}>
      <Logo />

      <div className="header__menu">
        <nav className="header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="btn btn--outline" href={PROFILE.resume} download>
            Download Resume
          </a>
          <a className="btn btn--dark" href={`mailto:${PROFILE.email}`}>
            Send a DM
          </a>
        </div>
      </div>

      <button
        type="button"
        className="header__toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}
