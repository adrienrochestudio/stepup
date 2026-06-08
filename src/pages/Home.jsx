import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="home">
      <section className="home-hero">
        <h1>{t('home.title')}</h1>
        <p className="home-tagline">{t('home.tagline')}</p>
        <p className="home-subtitle">{t('home.subtitle')}</p>
        <div className="home-cta">
          {user ? (
            <Link to="/dashboard" className="cta-primary">
              {t('home.ctaCourses')}
            </Link>
          ) : (
            <Link to="/login" className="cta-primary">
              {t('home.ctaStart')}
            </Link>
          )}
          <Link to="/resources/map" className="cta-secondary">
            {t('home.ctaMap')}
          </Link>
        </div>
      </section>

      <section className="home-features">
        <div className="home-feature">
          <div className="home-feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
            </svg>
          </div>
          <h3>{t('home.feature1Title')}</h3>
          <p>{t('home.feature1Desc')}</p>
        </div>
        <div className="home-feature">
          <div className="home-feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <h3>{t('home.feature2Title')}</h3>
          <p>{t('home.feature2Desc')}</p>
        </div>
        <div className="home-feature">
          <div className="home-feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
              <line x1="7" y1="2" x2="7" y2="22" />
              <line x1="17" y1="2" x2="17" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="2" y1="7" x2="7" y2="7" />
              <line x1="2" y1="17" x2="7" y2="17" />
              <line x1="17" y1="7" x2="22" y2="7" />
              <line x1="17" y1="17" x2="22" y2="17" />
            </svg>
          </div>
          <h3>{t('home.feature3Title')}</h3>
          <p>{t('home.feature3Desc')}</p>
        </div>
      </section>
    </div>
  );
}
