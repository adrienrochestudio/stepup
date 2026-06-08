import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="layout">
      <nav className="nav">
        <Link to="/" className="nav-logo">StepUP</Link>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/resources/map" onClick={() => setMenuOpen(false)}>Map</NavLink></li>
          <li><NavLink to="/resources/webinars" onClick={() => setMenuOpen(false)}>Webinars</NavLink></li>
          <li><NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</NavLink></li>
        </ul>
      </nav>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
