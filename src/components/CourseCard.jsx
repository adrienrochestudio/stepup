import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CourseCard.css';

export default function CourseCard({ course }) {
  const { t } = useTranslation();

  return (
    <div className="course-card">
      <div className="course-card-thumb">
        <span className="course-card-thumb-icon">&#128218;</span>
        <span className={`course-card-badge badge-${course.status}`}>
          {t(`courseCard.status.${course.status}`)}
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
            <div
              className="progress-bar-fill"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <span className="progress-label">{course.progress}%</span>
        </div>

        <Link to={`/course/${course.id}`} className={`course-card-cta ${course.status === 'completed' ? 'completed' : ''}`}>
          {t(`courseCard.cta.${course.status}`)}
        </Link>
      </div>
    </div>
  );
}
