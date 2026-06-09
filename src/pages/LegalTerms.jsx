import { useTranslation } from 'react-i18next';
import './LegalTerms.css';

export default function LegalTerms() {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <h1>{t('legal.terms.title')}</h1>
      <p className="legal-updated">{t('legal.lastUpdated')}: 2025-01-01</p>

      <section>
        <h2>1. {t('legal.terms.acceptance')}</h2>
        <p>{t('legal.terms.acceptanceText')}</p>
      </section>

      <section>
        <h2>2. {t('legal.terms.usage')}</h2>
        <p>{t('legal.terms.usageText')}</p>
      </section>

      <section>
        <h2>3. {t('legal.terms.ip')}</h2>
        <p>{t('legal.terms.ipText')}</p>
      </section>

      <section>
        <h2>4. {t('legal.terms.liability')}</h2>
        <p>{t('legal.terms.liabilityText')}</p>
      </section>

      <section>
        <h2>5. {t('legal.terms.modifications')}</h2>
        <p>{t('legal.terms.modificationsText')}</p>
      </section>

      <section>
        <h2>6. {t('legal.terms.contact')}</h2>
        <p>{t('legal.terms.contactText')}</p>
      </section>
    </div>
  );
}
