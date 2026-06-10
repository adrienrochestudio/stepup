import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CourseCard.css';

export default function CourseCard({ course, enrolled, onEnrollClick }) {
  const { t } = useTranslation();

  const title = course.i18nKey ? t(`courses.${course.i18nKey}.title`) : course.title;
  const description = course.i18nKey ? t(`courses.${course.i18nKey}.description`) : course.description;

  const thumbContent = course.image
    ? <img src={course.image} alt={title} className="course-card-thumb-img" />
    : <span className="course-card-thumb-icon">&#128218;</span>;

  if (!enrolled) {
    return (
      <div className="course-card course-card-locked">
        <div className="course-card-thumb catalog">
          {thumbContent}
          {course.free && (
            <span className="course-card-badge badge-free">{t('courseCard.free')}</span>
          )}
          {!course.free && <span className="course-card-lock-icon">&#128274;</span>}
        </div>
        <div className="course-card-body">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="course-card-meta">
            <span>{course.duration}</span>
          </div>
          {course.free ? (
            <Link to={`/course/${course.id}`} className="course-card-cta enroll">
              {t('courseCard.cta.not_started')}
            </Link>
          ) : (
            <button
              className="course-card-cta enroll"
              onClick={() => onEnrollClick?.(course)}
            >
              {t('courseCard.cta.enroll')}
            </button>
          )}
        </div>
      </div>
    );
  }

  const status = course.status || 'not_started';
  const progress = course.progress || 0;

  return (
    <div className="course-card">
      <div className="course-card-thumb">
        {thumbContent}
        <span className={`course-card-badge badge-${status}`}>
          {t(`courseCard.status.${status}`)}
        </span>
      </div>
      <div className="course-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="course-card-meta">
          <span>{course.duration}</span>
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
