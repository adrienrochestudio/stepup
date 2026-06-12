import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Enroll.css';

export default function EnrollSuccess() {
  const { courseId } = useParams();
  const { t } = useTranslation();

  return (
    <div className="enroll-result">
      <span className="enroll-result-icon" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <h1>{t('enroll.success.title')}</h1>
      <p>{t('enroll.success.message')}</p>
      <Link to="/dashboard" className="enroll-result-cta">
        {t('enroll.success.cta')}
      </Link>
    </div>
  );
}
