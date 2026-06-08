import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import CourseCard from '../components/CourseCard';
import EnrollModal from '../components/EnrollModal';
import CohortTracker from '../components/CohortTracker';
import { allCourses, mockEnrollments, getEnrolledCourses } from '../data/mockCourses';
import { initialCohorts } from '../data/mockCohorts';
import './Dashboard.css';

export default function Dashboard() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [enrollCourse, setEnrollCourse] = useState(null);

  const isCohortManager = user?.role === 'cohort_manager';
  const enrolled = getEnrolledCourses(mockEnrollments);
  const enrolledIds = mockEnrollments.map((e) => e.courseId);

  const courses = allCourses.map((course) => {
    const enrollment = enrolled.find((e) => e.id === course.id);
    if (enrollment) {
      return { ...enrollment, enrolled: true };
    }
    return { ...course, enrolled: false };
  });

  const handleEnrollClick = (course) => {
    setEnrollCourse(course);
  };

  const handleEnrolled = (courseId) => {
    setEnrollCourse(null);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>{t('dashboard.title')}</h1>
        <p>{t('dashboard.welcome', { name: user?.displayName || user?.email || 'Learner' })}</p>
      </div>

      {isCohortManager && (
        <div className="dashboard-cohort-section">
          <CohortTracker cohorts={initialCohorts} />
        </div>
      )}

      <div className="dashboard-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            enrolled={course.enrolled}
            onEnrollClick={handleEnrollClick}
          />
        ))}
      </div>

      {enrollCourse && (
        <EnrollModal
          course={enrollCourse}
          onClose={() => setEnrollCourse(null)}
          onEnrolled={handleEnrolled}
        />
      )}
    </div>
  );
}
