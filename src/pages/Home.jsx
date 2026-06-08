import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="home-hero">
      <h1>{t('home.title')}</h1>
      <p>{t('home.subtitle')}</p>
      <div className="home-cta">
        <Link to="/resources/map" className="cta-primary">
          {t('home.ctaMap')}
        </Link>
        <Link to="/resources/webinars" className="cta-secondary">
          {t('home.ctaWebinars')}
        </Link>
      </div>
    </section>
  );
}
