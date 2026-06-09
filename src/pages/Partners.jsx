import { useTranslation } from 'react-i18next';
import './Partners.css';

const partners = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Partner ${i + 1}`,
  description: `Supporting sustainable audiovisual production across Europe.`,
  contactUrl: '#',
}));

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
            <div className="partner-logo">
              <div className="partner-logo-placeholder">Logo</div>
            </div>
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
            <a href={partner.contactUrl} className="partner-contact">
              {t('about.partners.contact')}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
