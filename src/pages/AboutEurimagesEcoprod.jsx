import { useTranslation } from 'react-i18next';
import PartnersIntro from '../components/PartnersIntro';
import './AboutEurimagesEcoprod.css';

export default function AboutEurimagesEcoprod() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || 'fr';

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>{t('about.eurimagesEcoprod.title')}</h1>
        <p className="about-hero-subtitle">{t('about.eurimagesEcoprod.subtitle')}</p>
      </div>

      <div className="about-entities">
        <section className="about-entity">
          <div className="about-entity-logo">
            <div className="about-entity-logo-placeholder">Eurimages</div>
          </div>
          <h2>Eurimages</h2>
          <p className="about-entity-desc">{t('about.eurimagesEcoprod.eurimagesDesc')}</p>
          <a href="mailto:eurimages@coe.int" className="about-entity-contact">
            {t('about.eurimagesEcoprod.contact')}
          </a>
        </section>

        <section className="about-entity">
          <div className="about-entity-logo">
            <div className="about-entity-logo-placeholder">Ecoprod</div>
          </div>
          <h2>Ecoprod</h2>
          <p className="about-entity-desc">{t('about.eurimagesEcoprod.ecoprodDesc')}</p>
          <a href="mailto:contact@ecoprod.com" className="about-entity-contact">
            {t('about.eurimagesEcoprod.contact')}
          </a>
        </section>
      </div>

      <div className="about-initiative-banner">
        <p><PartnersIntro text={t('about.initiativeBanner')} lang={currentLang} /></p>
      </div>
    </div>
  );
}
