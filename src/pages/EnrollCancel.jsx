import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Enroll.css';

export default function EnrollCancel() {
  const { courseId } = useParams();
  const { t } = useTranslation();

  return (
    <div className="enroll-result">
      <span className="enroll-result-icon">&#10007;</span>
      <h1>{t('enroll.cancel.title')}</h1>
      <p>{t('enroll.cancel.message')}</p>
      <Link to={`/enroll/${courseId}`} className="enroll-result-cta">
        {t('enroll.cancel.cta')}
      </Link>
    </div>
  );
}
