import { useTranslation } from 'react-i18next';
import './LegalTerms.css';

const SECTIONS = [
  'object',
  'services',
  'price',
  'order',
  'access',
  'withdrawal',
  'duration',
  'certificate',
  'claims',
  'law',
];

export default function SalesTerms() {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <h1>{t('legal.sales.title')}</h1>
      <p className="legal-updated">{t('legal.lastUpdated')}: 2025-01-01</p>

      {SECTIONS.map((key) => (
        <section key={key}>
          <h2>{t(`legal.sales.${key}`)}</h2>
          <p>{t(`legal.sales.${key}Text`)}</p>
        </section>
      ))}
    </div>
  );
}
