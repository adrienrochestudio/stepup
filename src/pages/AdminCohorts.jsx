import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CohortTracker from '../components/CohortTracker';
import CreateCohortModal from '../components/CreateCohortModal';
import { initialCohorts } from '../data/mockCohorts';
import './AdminCohorts.css';

export default function AdminCohorts() {
  const [cohorts, setCohorts] = useState(initialCohorts);
  const [showModal, setShowModal] = useState(false);
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

      {cohorts.length > 0 ? (
        <CohortTracker cohorts={cohorts} />
      ) : (
        <p className="admin-cohorts-empty">{t('admin.noCohorts')}</p>
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
