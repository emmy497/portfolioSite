import { Link } from 'react-router'
import Logo from './Logo'
import { NAV_LINKS } from './navLinks'
import { PROFILE } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer container" id="contact">
      <div className="footer__top">
        <Logo />
        <p className="footer__copy">
          © {new Date().getFullYear()} {PROFILE.name} — built with React + TypeScript
        </p>
      </div>
      <div className="footer__bottom">
        <nav className="footer__nav" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="footer__nav" aria-label="Social">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  )
}
