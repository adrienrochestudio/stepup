import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import './Layout.css';

function getEcoprodUrl(lang) {
  return lang === 'fr' ? 'https://ecoprod.com' : 'https://ecoprod.com/en/';
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language?.substring(0, 2) || 'fr';

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
            <li><NavLink to="/about/partners" onClick={() => setMenuOpen(false)}>{t('nav.partners')}</NavLink></li>
            {user && (
              <li><NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>{t('nav.dashboard')}</NavLink></li>
            )}
            {user?.role === 'cohort_manager' && (
              <li><NavLink to="/admin/cohorts" onClick={() => setMenuOpen(false)}>{t('admin.title')}</NavLink></li>
            )}
            <li className="nav-ecoprod-link">
              <a
                href={getEcoprodUrl(currentLang)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ecoprod
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </li>
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
