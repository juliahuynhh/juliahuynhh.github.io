import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

const navLinks = [
  { label: 'About me', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact me', path: '/contact' },
]

function isNavLinkActive(pathname: string, path: string) {
  if (path === '/') {
    return pathname === '/'
  }
  if (path === '/projects') {
    return pathname === '/projects' || pathname.startsWith('/projects/')
  }
  return pathname === path
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const isDark = theme === 'dark'

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link
          to="/"
          className="navbar-home"
          aria-label="Home"
          onMouseDown={(event) => event.preventDefault()}
        >
          <span className="navbar-bracket" aria-hidden="true">
            |
          </span>
          <img
            src={isDark ? '/icons/clover-nav-dark.png' : '/icons/clover-nav.png'}
            alt=""
            draggable={false}
            className="navbar-icon navbar-icon-clover"
          />
          <span className="navbar-bracket" aria-hidden="true">
            &gt;
          </span>
        </Link>

        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`navbar-link${isNavLinkActive(location.pathname, path) ? ' active' : ''}`}
              onMouseDown={(event) => event.preventDefault()}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="navbar-theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="navbar-bracket" aria-hidden="true">
            &lt;
          </span>
          <img
            src={isDark ? '/icons/night-icon.png' : '/icons/day-icon.png'}
            alt=""
            className={`navbar-icon ${isDark ? 'navbar-icon-moon' : 'navbar-icon-sun'}`}
          />
          <span className="navbar-bracket" aria-hidden="true">
            |
          </span>
        </button>
      </div>
    </header>
  )
}
