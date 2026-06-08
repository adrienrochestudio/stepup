import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import CourseCard from '../components/CourseCard';
import { mockCourses } from '../data/mockCourses';
import './Dashboard.css';

export default function Dashboard() {
  const { user } = useAuth();
  const { t } = useTranslation();

  const stats = useMemo(() => ({
    total: mockCourses.length,
    inProgress: mockCourses.filter((c) => c.status === 'in_progress').length,
    completed: mockCourses.filter((c) => c.status === 'completed').length,
  }), []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>{t('dashboard.title')}</h1>
        <p>{t('dashboard.welcome', { name: user?.displayName || user?.email || 'Learner' })}</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-value">{stats.total}</div>
          <div className="stat-card-label">{t('dashboard.stats.courses')}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value">{stats.inProgress}</div>
          <div className="stat-card-label">{t('dashboard.stats.inProgress')}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value">{stats.completed}</div>
          <div className="stat-card-label">{t('dashboard.stats.completed')}</div>
        </div>
      </div>

      <h2 className="dashboard-section-title">{t('dashboard.myCourses')}</h2>

      <div className="dashboard-grid">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
