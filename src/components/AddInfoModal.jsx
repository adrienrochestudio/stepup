import { useState } from 'react';
import { categoryKeys, countryData } from '../data/countryData';
import './AddInfoModal.css';

const CATEGORY_META = {
  generalInfo: {
    label: 'General Information',
    fields: [
      'greenProductionStatus',
      'decarbonizationPlan',
      'laws',
      'socialLegislation',
      'audiovisualRegulation',
      'existingInitiatives',
    ],
  },
  sustainability: {
    label: 'Sustainability & Logistics',
    fields: [
      'trainTravel',
      'electricCars',
      'gridConnection',
      'wasteManagement',
      'socialRules',
      'otherFacts',
    ],
  },
  resources: {
    label: 'Resources',
    fields: [
      'greenConsultants',
      'serviceProviders',
      'trainings',
      'tools',
      'networks',
    ],
  },
};

const FIELD_LABELS = {
  greenProductionStatus: 'Status of green production',
  decarbonizationPlan: 'Decarbonization plan',
  laws: 'Relevant national legislation',
  socialLegislation: 'Social legislation',
  audiovisualRegulation: 'Film & TV industry regulations and incentives',
  existingInitiatives: 'Existing initiatives',
  trainTravel: 'Train transport',
  electricCars: 'Electric cars availability',
  gridConnection: 'Grid connection',
  wasteManagement: 'Waste management rules',
  socialRules: 'Social rules (gender equality, inclusion)',
  otherFacts: 'Other important facts',
  greenConsultants: 'Green consultants',
  serviceProviders: 'Service providers',
  trainings: 'Trainings',
  tools: 'Calculators & tools',
  networks: 'Networks for professionals',
};

export default function AddInfoModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    fields: {},
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      fields: { ...prev.fields, [field]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production this would POST to an API for admin review
    console.log('Submission for review:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="addinfo-overlay" onClick={onClose}>
        <div className="addinfo-modal" onClick={(e) => e.stopPropagation()}>
          <div className="addinfo-success">
            <div className="addinfo-success-icon">✓</div>
            <h3>Thank you!</h3>
            <p>
              Your contribution has been submitted for review. An administrator
              will validate the information before it is published.
            </p>
            <button className="addinfo-btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="addinfo-overlay" onClick={onClose}>
      <div className="addinfo-modal" onClick={(e) => e.stopPropagation()}>
        <div className="addinfo-header">
          <h2>Contribute country information</h2>
          <button className="addinfo-close" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="addinfo-form" onSubmit={handleSubmit}>
          <div className="addinfo-section addinfo-identity">
            <h3>Your details</h3>
            <div className="addinfo-row">
              <label>
                Full name *
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </label>
              <label>
                Email *
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>
              <label>
                Organization / Structure *
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                />
              </label>
            </div>
            <label>
              Country *
              <input
                type="text"
                required
                placeholder="e.g. Germany, Spain..."
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </label>
          </div>

          {categoryKeys.map((catKey) => {
            const meta = CATEGORY_META[catKey];
            return (
              <div key={catKey} className="addinfo-section">
                <h3>{meta.label}</h3>
                {meta.fields.map((field) => (
                  <label key={field} className="addinfo-field">
                    {FIELD_LABELS[field]}
                    <textarea
                      rows={3}
                      value={formData.fields[field] || ''}
                      onChange={(e) =>
                        handleFieldChange(field, e.target.value)
                      }
                      placeholder="Leave empty if not applicable"
                    />
                  </label>
                ))}
              </div>
            );
          })}

          <div className="addinfo-actions">
            <button type="button" className="addinfo-btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="addinfo-btn-primary">
              Submit for review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
