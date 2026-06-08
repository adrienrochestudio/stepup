import { Link, useParams } from 'react-router-dom';
import './Enroll.css';

export default function EnrollSuccess() {
  const { courseId } = useParams();

  return (
    <div className="enroll-result">
      <span className="enroll-result-icon">&#10003;</span>
      <h1>Enrollment Successful!</h1>
      <p>You have been enrolled in the course. You can now access it from your dashboard.</p>
      <Link to="/dashboard" className="enroll-result-cta">
        Go to Dashboard
      </Link>
    </div>
  );
}
