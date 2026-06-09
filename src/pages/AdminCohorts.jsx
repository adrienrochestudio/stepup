import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CohortCard from '../components/CohortCard';
import CohortTracker from '../components/CohortTracker';
import CreateCohortModal from '../components/CreateCohortModal';
import { initialCohorts } from '../data/mockCohorts';
import './AdminCohorts.css';

export default function AdminCohorts() {
  const [cohorts, setCohorts] = useState(initialCohorts);
  const [showModal, setShowModal] = useState(false);
  const [activeView, setActiveView] = useState('cohorts');
  const { t } = useTranslation();

  const handleCreate = (newCohort) => {
    setCohorts((prev) => [newCohort, ...prev]);
  };

  return (
    <div className="admin-cohorts">
      <div className="admin-cohorts-header">
        <h1>{t('admin.title')}</h1>
        <button className="admin-create-btn" onClick={() => setShowModal(true)}>
          {t('admin.createCohort')}
        </button>
      </div>

      <div className="admin-view-tabs">
        <button
          className={`admin-view-tab ${activeView === 'cohorts' ? 'active' : ''}`}
          onClick={() => setActiveView('cohorts')}
        >
          {t('admin.tabCohorts')}
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
          {cohorts.length > 0 ? (
            cohorts.map((cohort) => (
              <CohortCard key={cohort.id} cohort={cohort} />
            ))
          ) : (
            <p className="admin-cohorts-empty">{t('admin.noCohorts')}</p>
          )}
        </div>
      )}

      {activeView === 'tracking' && (
        <div className="admin-tracker-section">
          <CohortTracker cohorts={cohorts} />
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
