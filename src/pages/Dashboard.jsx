import { useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import CourseCard from '../components/CourseCard';
import { mockCourses } from '../data/mockCourses';
import './Dashboard.css';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = useMemo(() => ({
    total: mockCourses.length,
    inProgress: mockCourses.filter((c) => c.status === 'in_progress').length,
    completed: mockCourses.filter((c) => c.status === 'completed').length,
  }), []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>My Dashboard</h1>
        <p>Welcome back, {user?.displayName || user?.email || 'Learner'}</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-value">{stats.total}</div>
          <div className="stat-card-label">Courses</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value">{stats.inProgress}</div>
          <div className="stat-card-label">In Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value">{stats.completed}</div>
          <div className="stat-card-label">Completed</div>
        </div>
      </div>

      <h2 className="dashboard-section-title">My Courses</h2>

      <div className="dashboard-grid">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
