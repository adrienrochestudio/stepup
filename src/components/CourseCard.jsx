import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CourseCard.css';

export default function CourseCard({ course, enrolled, onEnrollClick }) {
  const { t } = useTranslation();

  if (!enrolled) {
    return (
      <div className="course-card course-card-locked">
        <div className="course-card-thumb catalog">
          <span className="course-card-thumb-icon">&#128218;</span>
          {course.free ? (
            <span className="course-card-badge badge-free">{t('courseCard.free')}</span>
          ) : (
            <span className="course-card-badge badge-price">{course.price} &euro;</span>
          )}
          <span className="course-card-lock-icon">&#128274;</span>
        </div>
        <div className="course-card-body">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <div className="course-card-meta">
            <span>{course.duration}</span>
            <span>{course.modules} {t('courseCard.modules')}</span>
          </div>
          <button
            className="course-card-cta enroll"
            onClick={() => onEnrollClick?.(course)}
          >
            {t('courseCard.cta.enroll')}
          </button>
        </div>
      </div>
    );
  }

  const status = course.status || 'not_started';
  const progress = course.progress || 0;

  return (
    <div className="course-card">
      <div className="course-card-thumb">
        <span className="course-card-thumb-icon">&#128218;</span>
        <span className={`course-card-badge badge-${status}`}>
          {t(`courseCard.status.${status}`)}
        </span>
      </div>
      <div className="course-card-body">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-card-meta">
          <span>{course.duration}</span>
          <span>{course.modules} {t('courseCard.modules')}</span>
        </div>
        <div className="course-card-progress">
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-label">{progress}%</span>
        </div>
        <Link to={`/course/${course.id}`} className={`course-card-cta ${status === 'completed' ? 'completed' : ''}`}>
          {t(`courseCard.cta.${status}`)}
        </Link>
      </div>
    </div>
  );
}
