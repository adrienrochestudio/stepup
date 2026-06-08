import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CohortCard.css';

export default function CohortCard({ cohort }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  const capacityPct = (cohort.enrolledStudents.length / cohort.maxStudents) * 100;

  return (
    <div className="cohort-card">
      <div className="cohort-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="cohort-card-info">
          <h3>{cohort.name}</h3>
          <span className="cohort-card-course">{cohort.courseTitle}</span>
        </div>

        <div className="cohort-card-meta">
          <span className={`cohort-badge cohort-badge-${cohort.status}`}>
            {cohort.status}
          </span>

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

          <div className="cohort-students-title">
            {t('admin.enrolledStudents', { count: cohort.enrolledStudents.length })}
          </div>

          {cohort.enrolledStudents.length > 0 ? (
            <ul className="cohort-students-list">
              {cohort.enrolledStudents.map((s) => (
                <li key={s.id} className="cohort-student">
                  <span className="cohort-student-name">{s.name}</span>
                  <span className="cohort-student-email">{s.email}</span>
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
