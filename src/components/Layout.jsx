import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './Layout.css';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

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

        <div className="nav-right">
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><NavLink to="/resources/map" onClick={() => setMenuOpen(false)}>Map</NavLink></li>
            <li><NavLink to="/resources/webinars" onClick={() => setMenuOpen(false)}>Webinars</NavLink></li>
            {user && (
              <li><NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</NavLink></li>
            )}
          </ul>

          {user ? (
            <button className="nav-auth-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="nav-auth-btn">
              Login
            </Link>
          )}
        </div>
      </nav>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
