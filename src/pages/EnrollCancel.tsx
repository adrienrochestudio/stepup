import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Enroll.css';

export default function EnrollCancel() {
  const { courseId } = useParams();
  const { t } = useTranslation();

  return (
    <div className="enroll-result">
      <span className="enroll-result-icon" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </span>
      <h1>{t('enroll.cancel.title')}</h1>
      <p>{t('enroll.cancel.message')}</p>
      <Link to={`/enroll/${courseId}`} className="enroll-result-cta">
        {t('enroll.cancel.cta')}
      </Link>
    </div>
  );
}
