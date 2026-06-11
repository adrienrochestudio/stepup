import { useState } from 'react';
import { categoryKeys } from '../data/countryData';
import { addSubmission } from '../services/submissions';
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
  const [mode, setMode] = useState('add');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    fields: {},
    amendmentSection: '',
    amendmentText: '',
  });
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleTopic = (field) => {
    setError('');
    setSelectedTopics((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field],
    );
  };

  const handleFieldChange = (field, value) => {
    setError('');
    setFormData((prev) => ({
      ...prev,
      fields: { ...prev.fields, [field]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'add') {
      const filled = selectedTopics.some((f) => formData.fields[f]?.trim());
      if (!filled) {
        setError('Pick at least one topic and write a few words, one is enough!');
        return;
      }
    } else if (!formData.amendmentText.trim()) {
      setError('Please describe what you think should be corrected.');
      return;
    }
    // Stored locally until a real backend exists; the admin back-office
    // (/admin) reads this store to review submissions.
    addSubmission(mode === 'add' ? 'map_contribution' : 'map_amendment', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="addinfo-overlay" onClick={onClose}>
        <div className="addinfo-modal" onClick={(e) => e.stopPropagation()}>
          <div className="addinfo-success">
            <div className="addinfo-success-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3>Thank you!</h3>
            <p>
              {mode === 'add'
                ? 'Your contribution has been submitted for review. An administrator will validate the information before it is published.'
                : 'Your correction request has been sent to the administrators. Nothing changes on the page until they review and validate it.'}
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
          <h2>Suggest a resource</h2>
          <button className="addinfo-close" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="addinfo-form" onSubmit={handleSubmit}>
          <div className="addinfo-mode-switch" role="tablist">
            <button
              type="button"
              className={`addinfo-mode-btn ${mode === 'add' ? 'active' : ''}`}
              onClick={() => { setMode('add'); setError(''); }}
            >
              <strong>Add information</strong>
              <span>Share a resource, contact or fact you know about</span>
            </button>
            <button
              type="button"
              className={`addinfo-mode-btn ${mode === 'amend' ? 'active' : ''}`}
              onClick={() => { setMode('amend'); setError(''); }}
            >
              <strong>I don&apos;t agree with this page</strong>
              <span>Suggest a correction to existing information</span>
            </button>
          </div>

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

          {mode === 'add' && (
            <div className="addinfo-section">
              <h3>What would you like to share?</h3>
              <p className="addinfo-hint">
                Pick only the topics you know about, a single link or tip
                already helps. You never need to fill in everything.
              </p>
              {categoryKeys.map((catKey) => {
                const meta = CATEGORY_META[catKey];
                return (
                  <div key={catKey} className="addinfo-topic-group">
                    <span className="addinfo-topic-group-label">{meta.label}</span>
                    <div className="addinfo-topic-chips">
                      {meta.fields.map((field) => (
                        <button
                          key={field}
                          type="button"
                          className={`addinfo-topic-chip ${selectedTopics.includes(field) ? 'active' : ''}`}
                          onClick={() => toggleTopic(field)}
                        >
                          <span className="addinfo-topic-chip-mark" aria-hidden="true">
                            {selectedTopics.includes(field) ? '–' : '+'}
                          </span>
                          {FIELD_LABELS[field]}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}

              {selectedTopics.length > 0 && (
                <div className="addinfo-selected-topics">
                  {selectedTopics.map((field) => (
                    <label key={field} className="addinfo-field">
                      {FIELD_LABELS[field]}
                      <textarea
                        rows={3}
                        autoFocus={selectedTopics[selectedTopics.length - 1] === field}
                        value={formData.fields[field] || ''}
                        onChange={(e) => handleFieldChange(field, e.target.value)}
                        placeholder="A name, a link, a short description, anything useful"
                      />
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {mode === 'amend' && (
            <div className="addinfo-section">
              <h3>What should be corrected?</h3>
              <p className="addinfo-hint">
                Your suggestion will not change the page directly. It is sent
                to the administrators, who review and validate it first.
              </p>
              <label>
                Section concerned (optional)
                <select
                  value={formData.amendmentSection}
                  onChange={(e) =>
                    setFormData({ ...formData, amendmentSection: e.target.value })
                  }
                >
                  <option value="">Whole page / not sure</option>
                  {categoryKeys.map((catKey) => (
                    <optgroup key={catKey} label={CATEGORY_META[catKey].label}>
                      {CATEGORY_META[catKey].fields.map((field) => (
                        <option key={field} value={field}>
                          {FIELD_LABELS[field]}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>
              <label className="addinfo-field">
                Your correction *
                <textarea
                  rows={5}
                  value={formData.amendmentText}
                  onChange={(e) => {
                    setError('');
                    setFormData({ ...formData, amendmentText: e.target.value });
                  }}
                  placeholder="What is inaccurate or outdated, and what should it say instead? Sources are welcome."
                />
              </label>
            </div>
          )}

          {error && <p className="addinfo-error">{error}</p>}

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
