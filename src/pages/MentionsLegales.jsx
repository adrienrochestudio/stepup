import { useTranslation } from 'react-i18next';
import './LegalTerms.css';

export default function MentionsLegales() {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <h1>{t('legal.notice.title')}</h1>
      <p className="legal-updated">{t('legal.lastUpdated')}: 2025-01-01</p>

      <section>
        <p>{t('legal.notice.intro')}</p>
      </section>

      <section>
        <h2>{t('legal.notice.editor')}</h2>
        <ul className="legal-info">
          <li><strong>{t('legal.notice.editorName')} :</strong> Association Ecoprod</li>
          <li><strong>{t('legal.notice.editorStatus')} :</strong> {t('legal.notice.editorStatusValue')}</li>
          <li><strong>{t('legal.notice.editorAddress')} :</strong> 9 rue Baudoin, 75013 Paris, France</li>
          <li><strong>{t('legal.notice.editorSiret')} :</strong> 90500282000017</li>
          <li><strong>{t('legal.notice.editorEmail')} :</strong> <a href="mailto:stepup@ecoprod.com">stepup@ecoprod.com</a></li>
        </ul>
      </section>

      <section>
        <h2>{t('legal.notice.publication')}</h2>
        <p>{t('legal.notice.publicationText')}</p>
      </section>

      <section>
        <h2>{t('legal.notice.hosting')}</h2>
        <p>{t('legal.notice.hostingText')}</p>
      </section>

      <section>
        <h2>{t('legal.notice.ip')}</h2>
        <p>{t('legal.notice.ipText')}</p>
      </section>

      <section>
        <h2>{t('legal.notice.data')}</h2>
        <p>{t('legal.notice.dataText')}</p>
      </section>

      <section>
        <h2>{t('legal.notice.contact')}</h2>
        <p>{t('legal.notice.contactText')}</p>
      </section>
    </div>
  );
}
