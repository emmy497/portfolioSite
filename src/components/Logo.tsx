import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Emmy.dev home">
      <span className="logo__mark" aria-hidden="true">
        {'</>'}
      </span>
      <span>
        Emmy<span className="logo__ext">.dev</span>
      </span>
    </Link>
  )
}
