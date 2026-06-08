import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import LanguageSwitcher from './LanguageSwitcher';
import './Layout.css';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
            <li><NavLink to="/resources/map" onClick={() => setMenuOpen(false)}>{t('nav.map')}</NavLink></li>
            <li><NavLink to="/resources/webinars" onClick={() => setMenuOpen(false)}>{t('nav.webinars')}</NavLink></li>
            {user && (
              <li><NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>{t('nav.dashboard')}</NavLink></li>
            )}
            {user?.role === 'cohort_manager' && (
              <li><NavLink to="/admin/cohorts" onClick={() => setMenuOpen(false)}>{t('admin.title')}</NavLink></li>
            )}
          </ul>

          <LanguageSwitcher />

          {user ? (
            <button className="nav-auth-btn" onClick={handleLogout}>
              {t('nav.logout')}
            </button>
          ) : (
            <Link to="/login" className="nav-auth-btn">
              {t('nav.login')}
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
