import { useState } from 'react';
import CohortCard from '../components/CohortCard';
import CreateCohortModal from '../components/CreateCohortModal';
import { initialCohorts } from '../data/mockCohorts';
import './AdminCohorts.css';

export default function AdminCohorts() {
  const [cohorts, setCohorts] = useState(initialCohorts);
  const [showModal, setShowModal] = useState(false);

  const handleCreate = (newCohort) => {
    setCohorts((prev) => [newCohort, ...prev]);
  };

  return (
    <div className="admin-cohorts">
      <div className="admin-cohorts-header">
        <h1>Cohort Manager</h1>
        <button className="admin-create-btn" onClick={() => setShowModal(true)}>
          + Create Cohort
        </button>
      </div>

      <div className="admin-cohorts-list">
        {cohorts.length > 0 ? (
          cohorts.map((cohort) => (
            <CohortCard key={cohort.id} cohort={cohort} />
          ))
        ) : (
          <p className="admin-cohorts-empty">No cohorts yet. Create your first one!</p>
        )}
      </div>

      {showModal && (
        <CreateCohortModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreate}
        />
      )}
    </div>
  );
}
