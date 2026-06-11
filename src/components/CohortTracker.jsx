import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { objectsToCsv, downloadCsv } from '../services/csv';
import ReminderModal from './ReminderModal';
import './CohortTracker.css';

const STATUS_ORDER = ['never_connected', 'not_started', 'in_progress', 'completed'];

function StatusBadge({ status, lastLogin, t }) {
  const labels = {
    never_connected: t('cohortTracker.statusNeverConnected'),
    not_started: t('cohortTracker.statusNotStarted'),
    in_progress: t('cohortTracker.statusInProgress'),
    completed: t('cohortTracker.statusCompleted'),
  };

  return (
    <div className="tracker-status-cell">
      <span className={`tracker-status-badge status-${status}`}>
        {labels[status] || status}
      </span>
      {status === 'in_progress' && lastLogin && (
        <span className="tracker-last-login">
          {new Date(lastLogin).toLocaleDateString('fr-FR', {
            day: 'numeric', month: 'short', year: 'numeric',
          })}
        </span>
      )}
    </div>
  );
}

export default function CohortTracker({ cohorts }) {
  const { t } = useTranslation();
  const [selectedCohort, setSelectedCohort] = useState(cohorts[0]?.id || '');
  const [activeTab, setActiveTab] = useState('tracking');
  const [reminderLearner, setReminderLearner] = useState(null);
  const [bulkSent, setBulkSent] = useState(false);

  const cohort = cohorts.find((c) => c.id === selectedCohort);
  const learners = cohort?.enrolledStudents || [];

  const passedLearners = learners.filter((l) => l.status === 'completed');
  const notCompletedLearners = learners.filter((l) => l.status !== 'completed');

  const capacityPct = cohort ? (learners.length / cohort.maxStudents) * 100 : 0;
  const statusCounts = learners.reduce((acc, s) => {
    acc[s.status] = (acc[s.status] || 0) + 1;
    return acc;
  }, {});

  const handleBulkReminder = () => {
    notCompletedLearners.forEach((learner) => {
      console.log('[StepUP] Bulk reminder email:', {
        from: 'stepup@ecoprod.com',
        to: learner.email || `${learner.username}@pending`,
        course: cohort?.courseTitle,
      });
    });
    setBulkSent(true);
    setTimeout(() => setBulkSent(false), 3000);
  };

  const handleExport = () => {
    const data = learners.map((l) => ({
      [t('admin.modal.templateFirstName')]: l.firstName,
      [t('admin.modal.templateLastName')]: l.lastName,
      Email: l.email || '',
      Username: l.username,
      [t('cohortTracker.status')]: t(`cohortTracker.status${l.status.charAt(0).toUpperCase() + l.status.slice(1).replace(/_([a-z])/g, (_, c) => c.toUpperCase())}`),
      [t('cohortTracker.lastActive')]: l.lastLogin ? new Date(l.lastLogin).toLocaleDateString('fr-FR') : '-',
      [t('admin.modal.course')]: cohort?.courseTitle || '',
    }));

    downloadCsv(`${cohort?.name || 'cohorte'}_export.csv`, objectsToCsv(data));
  };

  return (
    <div className="cohort-tracker">
      {cohorts.length > 1 && (
        <div className="cohort-switcher">
          {cohorts.map((c) => (
            <button
              key={c.id}
              className={`cohort-switch-btn ${c.id === selectedCohort ? 'active' : ''}`}
              onClick={() => setSelectedCohort(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      {cohort && (
        <>
          <div className="cohort-board-header">
            <div className="cohort-board-title">
              <h2>{cohort.name}</h2>
              <span className="cohort-board-course">{cohort.courseTitle}</span>
            </div>
            <div className="cohort-board-meta">
              <span className="cohort-board-dates">
                <strong>{t('admin.start')}:</strong> {cohort.startDate}
                {'  ·  '}
                <strong>{t('admin.end')}:</strong> {cohort.endDate}
              </span>
              <div className="cohort-capacity">
                <div className="cohort-capacity-text">
                  {learners.length}/{cohort.maxStudents}
                </div>
                <div className="cohort-capacity-bar">
                  <div className="cohort-capacity-fill" style={{ width: `${capacityPct}%` }} />
                </div>
              </div>
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
          </div>

          <div className="cohort-tracker-tabs">
            <button
              className={`tracker-tab ${activeTab === 'tracking' ? 'active' : ''}`}
              onClick={() => setActiveTab('tracking')}
            >
              {t('cohortTracker.tabTracking')}
            </button>
            <button
              className={`tracker-tab ${activeTab === 'certificates' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificates')}
            >
              {t('cohortTracker.tabCertificates')} ({passedLearners.length})
            </button>
          </div>

          {activeTab === 'tracking' && (
            <>
              <div className="cohort-tracker-actions">
                {notCompletedLearners.length > 0 && (
                  <button
                    className="tracker-bulk-reminder-btn"
                    onClick={handleBulkReminder}
                    disabled={bulkSent}
                  >
                    {bulkSent ? t('cohortTracker.bulkReminderSent') : t('cohortTracker.bulkReminder', { count: notCompletedLearners.length })}
                  </button>
                )}
                <button className="tracker-export-btn" onClick={handleExport}>
                  {t('cohortTracker.exportData')}
                </button>
              </div>

              <div className="cohort-tracker-table-wrap">
                <table className="cohort-tracker-table">
                  <thead>
                    <tr>
                      <th>{t('cohortTracker.learner')}</th>
                      <th>{t('cohortTracker.status')}</th>
                      <th>{t('cohortTracker.lastActive')}</th>
                      <th>{t('cohortTracker.actions')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {learners.map((learner) => (
                      <tr key={learner.id}>
                        <td>
                          <div className="learner-name">{learner.firstName} {learner.lastName}</div>
                          <div className="learner-email">{learner.email || learner.username}</div>
                        </td>
                        <td>
                          <StatusBadge status={learner.status} lastLogin={learner.lastLogin} t={t} />
                        </td>
                        <td className="last-active">
                          {learner.lastLogin
                            ? new Date(learner.lastLogin).toLocaleDateString('fr-FR', {
                                day: 'numeric', month: 'short', year: 'numeric',
                              })
                            : '-'}
                        </td>
                        <td>
                          <button
                            className="tracker-reminder-btn"
                            onClick={() => setReminderLearner(learner)}
                          >
                            {t('cohortTracker.sendReminder')}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'certificates' && (
            <div className="cohort-certificates">
              {passedLearners.length === 0 ? (
                <p className="cohort-certificates-empty">{t('cohortTracker.noCertificates')}</p>
              ) : (
                <div className="cohort-tracker-table-wrap">
                  <table className="cohort-tracker-table">
                    <thead>
                      <tr>
                        <th>{t('cohortTracker.learner')}</th>
                        <th>{t('cohortTracker.certificate')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {passedLearners.map((learner) => (
                        <tr key={learner.id}>
                          <td>
                            <div className="learner-name">{learner.firstName} {learner.lastName}</div>
                            <div className="learner-email">{learner.email || learner.username}</div>
                          </td>
                          <td>
                            <button className="tracker-cert-btn" disabled>
                              {t('cohortTracker.downloadCertificate')}
                            </button>
                            <span className="cert-coming-soon">{t('cohortTracker.comingSoon')}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {reminderLearner && (
        <ReminderModal
          learner={reminderLearner}
          courseTitle={cohort?.courseTitle || ''}
          onClose={() => setReminderLearner(null)}
        />
      )}
    </div>
  );
}
