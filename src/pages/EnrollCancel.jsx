import { Link, useParams } from 'react-router-dom';
import './Enroll.css';

export default function EnrollCancel() {
  const { courseId } = useParams();

  return (
    <div className="enroll-result">
      <span className="enroll-result-icon">&#10007;</span>
      <h1>Enrollment Cancelled</h1>
      <p>Your payment was cancelled. No charges have been made.</p>
      <Link to={`/enroll/${courseId}`} className="enroll-result-cta">
        Try Again
      </Link>
    </div>
  );
}
