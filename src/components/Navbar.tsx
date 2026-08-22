import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

function isNavLinkActive(pathname: string, path: string) {
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
        <Link to="/" className="navbar-home" aria-label="Home">
          <img src="/icons/clover-nav.png" alt="" className="navbar-icon navbar-icon-clover" />
        </Link>

        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`navbar-link${isNavLinkActive(location.pathname, path) ? ' active' : ''}`}
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
          <img
            src={isDark ? '/icons/night-icon.png' : '/icons/day-icon.png'}
            alt=""
            className={`navbar-icon ${isDark ? 'navbar-icon-moon' : 'navbar-icon-sun'}`}
          />
        </button>
      </div>
    </header>
  )
}
