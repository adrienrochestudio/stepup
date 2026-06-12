import { useTranslation } from 'react-i18next';
import './LegalTerms.css';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <h1>{t('legal.privacy.title')}</h1>
      <p className="legal-updated">{t('legal.lastUpdated')}: 2025-01-01</p>

      <section>
        <h2>1. {t('legal.privacy.collection')}</h2>
        <p>{t('legal.privacy.collectionText')}</p>
      </section>

      <section>
        <h2>2. {t('legal.privacy.use')}</h2>
        <p>{t('legal.privacy.useText')}</p>
      </section>

      <section>
        <h2>3. {t('legal.privacy.cookies')}</h2>
        <p>{t('legal.privacy.cookiesText')}</p>
      </section>

      <section>
        <h2>4. {t('legal.privacy.rights')}</h2>
        <p>{t('legal.privacy.rightsText')}</p>
      </section>

      <section>
        <h2>5. {t('legal.privacy.contact')}</h2>
        <p>{t('legal.privacy.contactText')}</p>
      </section>
    </div>
  );
}
