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
          <div className="home-feature-icon">&#127891;</div>
          <h3>{t('home.feature1Title')}</h3>
          <p>{t('home.feature1Desc')}</p>
        </div>
        <div className="home-feature">
          <div className="home-feature-icon">&#127760;</div>
          <h3>{t('home.feature2Title')}</h3>
          <p>{t('home.feature2Desc')}</p>
        </div>
        <div className="home-feature">
          <div className="home-feature-icon">&#127916;</div>
          <h3>{t('home.feature3Title')}</h3>
          <p>{t('home.feature3Desc')}</p>
        </div>
      </section>
    </div>
  );
}
