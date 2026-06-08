import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Enroll.css';

export default function EnrollSuccess() {
  const { courseId } = useParams();
  const { t } = useTranslation();

  return (
    <div className="enroll-result">
      <span className="enroll-result-icon">&#10003;</span>
      <h1>{t('enroll.success.title')}</h1>
      <p>{t('enroll.success.message')}</p>
      <Link to="/dashboard" className="enroll-result-cta">
        {t('enroll.success.cta')}
      </Link>
    </div>
  );
}
