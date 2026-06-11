import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CohortTracker from '../components/CohortTracker';
import CohortCard from '../components/CohortCard';
import CreateCohortModal from '../components/CreateCohortModal';
import { initialCohorts } from '../data/mockCohorts';
import { useAuth } from '../hooks/useAuth';
import './AdminCohorts.css';

const MAX_COHORTS = 5;

export default function AdminCohorts() {
  const [cohorts, setCohorts] = useState(initialCohorts);
  const [showModal, setShowModal] = useState(false);
  const [activeView, setActiveView] = useState('cohorts');
  const { t } = useTranslation();
  const { user } = useAuth();

  const myCohorts = cohorts;
  const activeCohorts = myCohorts.filter((c) => c.status === 'active');
  const pendingCohorts = myCohorts.filter((c) => c.status === 'pending_approval');
  const usedQuota = activeCohorts.length + pendingCohorts.length;
  const canCreate = usedQuota < MAX_COHORTS;

  const handleCreate = (newCohort) => {
    setCohorts((prev) => [{ ...newCohort, status: 'pending_approval', managerName: user?.displayName || '' }, ...prev]);
  };

  return (
    <div className="admin-cohorts">
      <div className="admin-cohorts-header">
        <div>
          <h1>{t('admin.title')}</h1>
          <span className="admin-quota">{t('admin.quota', { used: usedQuota, max: MAX_COHORTS })}</span>
        </div>
      </div>

      <div className="admin-view-tabs">
        <button
          className={`admin-view-tab ${activeView === 'cohorts' ? 'active' : ''}`}
          onClick={() => setActiveView('cohorts')}
        >
          {t('admin.tabCohorts')} ({myCohorts.length})
        </button>
        <button
          className={`admin-view-tab ${activeView === 'tracking' ? 'active' : ''}`}
          onClick={() => setActiveView('tracking')}
        >
          {t('admin.tabTracking')}
        </button>
      </div>

      {activeView === 'cohorts' && (
        <div className="admin-cohorts-list">
          <div className="admin-cohorts-list-header">
            {canCreate ? (
              <button className="admin-create-btn" onClick={() => setShowModal(true)}>
                {t('admin.createCohort')}
              </button>
            ) : (
              <span className="admin-quota-full">{t('admin.quotaFull')}</span>
            )}
          </div>

          {pendingCohorts.length > 0 && (
            <div className="admin-pending-notice">
              {t('admin.pendingNotice', { count: pendingCohorts.length })}
            </div>
          )}

          {myCohorts.length > 0 ? (
            myCohorts.map((cohort) => (
              <CohortCard key={cohort.id} cohort={cohort} />
            ))
          ) : (
            <p className="admin-cohorts-empty">{t('admin.noCohorts')}</p>
          )}
        </div>
      )}

      {activeView === 'tracking' && (
        <div className="admin-tracker-section">
          <CohortTracker cohorts={activeCohorts} />
        </div>
      )}

      {showModal && (
        <CreateCohortModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreate}
        />
      )}
    </div>
  );
}
