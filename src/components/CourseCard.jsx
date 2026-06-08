import { Link } from 'react-router-dom';
import './CourseCard.css';

const statusLabels = {
  not_started: 'New',
  in_progress: 'In Progress',
  completed: 'Completed',
};

const ctaLabels = {
  not_started: 'Start Course',
  in_progress: 'Continue',
  completed: 'Review',
};

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-card-thumb">
        <span className="course-card-thumb-icon">&#128218;</span>
        <span className={`course-card-badge badge-${course.status}`}>
          {statusLabels[course.status]}
        </span>
      </div>

      <div className="course-card-body">
        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-card-meta">
          <span>{course.duration}</span>
          <span>{course.modules} modules</span>
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
          {ctaLabels[course.status]}
        </Link>
      </div>
    </div>
  );
}
