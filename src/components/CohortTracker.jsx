import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CohortTracker.css';

const mockLearnerActivity = [
  { id: 's1', name: 'Alice Martin', email: 'alice@example.com', online: true, progress: 85, lastActive: '2026-06-08T14:30:00' },
  { id: 's2', name: 'Bob Dupont', email: 'bob@example.com', online: false, progress: 62, lastActive: '2026-06-07T09:15:00' },
  { id: 's3', name: 'Claire Moreau', email: 'claire@example.com', online: true, progress: 45, lastActive: '2026-06-08T15:00:00' },
  { id: 's4', name: 'David Laurent', email: 'david@example.com', online: false, progress: 20, lastActive: '2026-06-05T11:00:00' },
  { id: 's5', name: 'Emma Petit', email: 'emma@example.com', online: true, progress: 100, lastActive: '2026-06-08T13:45:00' },
  { id: 's6', name: 'François Bernard', email: 'francois@example.com', online: false, progress: 30, lastActive: '2026-06-06T16:30:00' },
];

export default function CohortTracker({ cohorts }) {
  const { t } = useTranslation();
  const [selectedCohort, setSelectedCohort] = useState(cohorts[0]?.id || '');

  const cohort = cohorts.find((c) => c.id === selectedCohort);
  const learners = mockLearnerActivity.slice(0, cohort?.enrolledStudents?.length || 3);
  const onlineCount = learners.filter((l) => l.online).length;

  return (
    <div className="cohort-tracker">
      <div className="cohort-tracker-controls">
        <select
          value={selectedCohort}
          onChange={(e) => setSelectedCohort(e.target.value)}
          className="cohort-select"
        >
          {cohorts.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      {cohort && (
        <>
          <div className="cohort-tracker-stats">
            <div className="tracker-stat">
              <span className="tracker-stat-value">{learners.length}</span>
              <span className="tracker-stat-label">{t('cohortTracker.totalLearners')}</span>
            </div>
            <div className="tracker-stat">
              <span className="tracker-stat-value online">{onlineCount}</span>
              <span className="tracker-stat-label">{t('cohortTracker.online')}</span>
            </div>
            <div className="tracker-stat">
              <span className="tracker-stat-value">
                {Math.round(learners.reduce((sum, l) => sum + l.progress, 0) / learners.length)}%
              </span>
              <span className="tracker-stat-label">{t('cohortTracker.avgProgress')}</span>
            </div>
          </div>

          <div className="cohort-tracker-table-wrap">
            <table className="cohort-tracker-table">
              <thead>
                <tr>
                  <th>{t('cohortTracker.learner')}</th>
                  <th>{t('cohortTracker.status')}</th>
                  <th>{t('cohortTracker.progress')}</th>
                  <th>{t('cohortTracker.lastActive')}</th>
                </tr>
              </thead>
              <tbody>
                {learners.map((learner) => (
                  <tr key={learner.id}>
                    <td>
                      <div className="learner-name">{learner.name}</div>
                      <div className="learner-email">{learner.email}</div>
                    </td>
                    <td>
                      <span className={`status-dot ${learner.online ? 'online' : 'offline'}`} />
                      {learner.online ? t('cohortTracker.connected') : t('cohortTracker.offline')}
                    </td>
                    <td>
                      <div className="tracker-progress">
                        <div className="tracker-progress-bar">
                          <div className="tracker-progress-fill" style={{ width: `${learner.progress}%` }} />
                        </div>
                        <span>{learner.progress}%</span>
                      </div>
                    </td>
                    <td className="last-active">
                      {new Date(learner.lastActive).toLocaleDateString('fr-FR', {
                        day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
