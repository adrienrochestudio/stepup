import { useTranslation } from 'react-i18next';
import partners from '../data/partners';
import './Partners.css';

export default function Partners() {
  const { t } = useTranslation();

  return (
    <div className="partners-page">
      <div className="partners-hero">
        <h1>{t('about.partners.title')}</h1>
        <p className="partners-hero-subtitle">{t('about.partners.subtitle')}</p>
      </div>

      <div className="partners-grid">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-card">
            <a
              href={partner.url}
              className="partner-logo-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={partner.name}
            >
              <img
                src={`${import.meta.env.BASE_URL}${partner.logo}`}
                alt={partner.name}
                className="partner-logo-img"
                loading="lazy"
              />
            </a>
            <h3>{partner.name}</h3>
            <p>{t(`about.partners.items.${partner.id}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
