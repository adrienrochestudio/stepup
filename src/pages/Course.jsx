import { useParams, Link } from 'react-router-dom';
import ScormPlayer from '../components/ScormPlayer';
import { mockCourses } from '../data/mockCourses';
import './Course.css';

export default function Course() {
  const { id } = useParams();
  const course = mockCourses.find((c) => c.id === id);

  if (!course) {
    return <div className="course-page"><p className="course-not-found">Course not found.</p></div>;
  }

  const scormUrl = course.scormPackageUrl
    ? `/scorm/${course.id}/index.html`
    : '';

  return (
    <div className="course-page">
      <div className="course-top-bar">
        <Link to="/dashboard" className="course-back-btn">
          &#8592; Back
        </Link>

        <div className="course-top-info">
          <h1>{course.title}</h1>
          <div className="course-top-meta">
            <span>{course.duration}</span>
            <span>{course.modules} modules</span>
          </div>
        </div>

        <div className="course-top-progress">
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${course.progress}%` }} />
          </div>
          <span className="course-top-progress-label">{course.progress}% complete</span>
        </div>
      </div>

      <ScormPlayer courseId={course.id} scormUrl={scormUrl} />
    </div>
  );
}
