import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import CourseCard from '../components/CourseCard';
import CohortTracker from '../components/CohortTracker';
import { mockEnrollments, getEnrolledCourses, getCatalogCourses } from '../data/mockCourses';
import { initialCohorts } from '../data/mockCohorts';
import './Dashboard.css';

export default function Dashboard() {
  const { user } = useAuth();
  const { t } = useTranslation();

  const isCohortManager = user?.role === 'cohort_manager';
  const enrolled = getEnrolledCourses(mockEnrollments);
  const catalog = getCatalogCourses(mockEnrollments);

  if (isCohortManager) {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>{t('dashboard.titleManager')}</h1>
          <p>{t('dashboard.welcome', { name: user?.displayName || user?.email || 'Manager' })}</p>
        </div>
        <CohortTracker cohorts={initialCohorts} />
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>{t('dashboard.title')}</h1>
        <p>{t('dashboard.welcome', { name: user?.displayName || user?.email || 'Learner' })}</p>
      </div>

      <h2 className="dashboard-section-title">{t('dashboard.myCourses')}</h2>
      <div className="dashboard-grid">
        {enrolled.map((course) => (
          <CourseCard key={course.id} course={course} enrolled />
        ))}
      </div>

      <h2 className="dashboard-section-title dashboard-section-catalog">{t('dashboard.catalog')}</h2>
      <p className="dashboard-catalog-subtitle">{t('dashboard.catalogSubtitle')}</p>
      <div className="dashboard-grid">
        {catalog.map((course) => (
          <CourseCard key={course.id} course={course} enrolled={false} />
        ))}
      </div>
    </div>
  );
}
