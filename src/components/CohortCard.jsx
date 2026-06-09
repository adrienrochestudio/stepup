import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CohortCard.css';

export default function CohortCard({ cohort }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  const capacityPct = (cohort.enrolledStudents.length / cohort.maxStudents) * 100;

  const statusCounts = cohort.enrolledStudents.reduce((acc, s) => {
    acc[s.status] = (acc[s.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="cohort-card">
      <div className="cohort-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="cohort-card-info">
          <h3>{cohort.name}</h3>
          <span className="cohort-card-course">{cohort.courseTitle}</span>
        </div>

        <div className="cohort-card-meta">
          <div className="cohort-capacity">
            <div className="cohort-capacity-text">
              {cohort.enrolledStudents.length}/{cohort.maxStudents}
            </div>
            <div className="cohort-capacity-bar">
              <div className="cohort-capacity-fill" style={{ width: `${capacityPct}%` }} />
            </div>
          </div>

          <span className={`cohort-expand-icon ${expanded ? 'open' : ''}`}>
            &#9660;
          </span>
        </div>
      </div>

      {expanded && (
        <div className="cohort-card-details">
          <div className="cohort-dates">
            <span><strong>{t('admin.start')}:</strong> {cohort.startDate}</span>
            <span><strong>{t('admin.end')}:</strong> {cohort.endDate}</span>
          </div>

          <div className="cohort-status-summary">
            {statusCounts.completed > 0 && (
              <span className="cohort-mini-badge status-completed">{statusCounts.completed} {t('cohortTracker.statusCompleted')}</span>
            )}
            {statusCounts.in_progress > 0 && (
              <span className="cohort-mini-badge status-in_progress">{statusCounts.in_progress} {t('cohortTracker.statusInProgress')}</span>
            )}
            {statusCounts.not_started > 0 && (
              <span className="cohort-mini-badge status-not_started">{statusCounts.not_started} {t('cohortTracker.statusNotStarted')}</span>
            )}
            {statusCounts.never_connected > 0 && (
              <span className="cohort-mini-badge status-never_connected">{statusCounts.never_connected} {t('cohortTracker.statusNeverConnected')}</span>
            )}
          </div>

          <div className="cohort-students-title">
            {t('admin.enrolledStudents', { count: cohort.enrolledStudents.length })}
          </div>

          {cohort.enrolledStudents.length > 0 ? (
            <ul className="cohort-students-list">
              {cohort.enrolledStudents.map((s) => (
                <li key={s.id} className="cohort-student">
                  <span className="cohort-student-name">{s.firstName} {s.lastName}</span>
                  <span className={`cohort-student-status status-${s.status}`}>
                    {t(`cohortTracker.status${s.status.charAt(0).toUpperCase() + s.status.slice(1).replace(/_([a-z])/g, (_, c) => c.toUpperCase())}`)}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="cohort-empty">{t('admin.noStudents')}</p>
          )}
        </div>
      )}
    </div>
  );
}
