import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockCourses } from '../data/mockCourses';
import { apiFetch } from '../services/api';
import { stripePromise, isStripeConfigured } from '../services/stripe';
import './Enroll.css';

export default function Enroll() {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const course = mockCourses.find((c) => c.id === courseId);

  if (!course) {
    return <div className="enroll-page"><p className="enroll-not-found">Course not found.</p></div>;
  }

  const handleCheckout = async () => {
    setError('');
    setLoading(true);

    try {
      if (!isStripeConfigured) {
        // Mock mode — simulate success
        window.location.href = `/enroll/${courseId}/success?mock=true`;
        return;
      }

      const { url } = await apiFetch('/api/checkout/create-session', {
        method: 'POST',
        body: JSON.stringify({ courseId }),
      });

      if (url) {
        window.location.href = url;
      }
    } catch (err) {
      setError(err.message || 'Checkout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enroll-page">
      <div className="enroll-card">
        <div className="enroll-card-header">
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>

        <div className="enroll-card-body">
          <div className="enroll-details">
            <div className="enroll-detail">
              <span className="enroll-detail-label">Duration</span>
              <span className="enroll-detail-value">{course.duration}</span>
            </div>
            <div className="enroll-detail">
              <span className="enroll-detail-label">Modules</span>
              <span className="enroll-detail-value">{course.modules}</span>
            </div>
          </div>

          <div className="enroll-price">
            <span className="enroll-price-amount">{course.price}</span>
            <span className="enroll-price-currency"> EUR</span>
          </div>

          <button
            className="enroll-cta"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? 'Redirecting...' : 'Enroll Now'}
          </button>

          {error && <p className="enroll-error">{error}</p>}
        </div>
      </div>
    </div>
  );
}
