import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import './Layout.css';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
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
        <Link to="/" className="nav-logo">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="StepUP by Ecoprod" />
        </Link>

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
            <li
              className="nav-dropdown"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="nav-dropdown-trigger" type="button">
                {t('nav.aboutUs')}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {aboutOpen && (
                <ul className="nav-dropdown-menu">
                  <li>
                    <NavLink to="/about/eurimages-ecoprod" onClick={() => { setMenuOpen(false); setAboutOpen(false); }}>
                      {t('nav.aboutEurimagesEcoprod')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about/partners" onClick={() => { setMenuOpen(false); setAboutOpen(false); }}>
                      {t('nav.aboutPartners')}
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
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

      <Footer />
    </div>
  );
}
