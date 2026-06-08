import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScormPlayer from '../components/ScormPlayer';
import { allCourses } from '../data/mockCourses';
import './Course.css';

export default function Course() {
  const { id } = useParams();
  const { t } = useTranslation();
  const course = allCourses.find((c) => c.id === id);

  if (!course) {
    return <div className="course-page"><p className="course-not-found">{t('course.notFound')}</p></div>;
  }

  const scormUrl = course.scormPackageUrl
    ? `/scorm/${course.id}/index.html`
    : '';

  return (
    <div className="course-page">
      <div className="course-top-bar">
        <Link to="/dashboard" className="course-back-btn">
          &#8592; {t('course.back')}
        </Link>

        <div className="course-top-info">
          <h1>{course.title}</h1>
          <div className="course-top-meta">
            <span>{course.duration}</span>
            <span>{course.modules} {t('course.modules')}</span>
          </div>
        </div>

        <div className="course-top-progress">
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${course.progress}%` }} />
          </div>
          <span className="course-top-progress-label">{t('course.complete', { progress: course.progress })}</span>
        </div>
      </div>

      <ScormPlayer courseId={course.id} scormUrl={scormUrl} />
    </div>
  );
}
