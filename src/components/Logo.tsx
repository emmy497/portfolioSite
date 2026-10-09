export default function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Emmy.js home">
      <span className="logo__mark" aria-hidden="true">
        {'</>'}
      </span>
      <span>
        Emmy<span className="logo__ext">.js</span>
      </span>
    </a>
  )
}
