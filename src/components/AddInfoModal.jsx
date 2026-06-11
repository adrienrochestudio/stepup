import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { categoryKeys } from '../data/countryData';
import { addSubmission } from '../services/submissions';
import './AddInfoModal.css';

// Topic fields per category. Labels are pulled from the already-translated
// map.* keys so the form stays consistent with the map UI.
const CATEGORY_FIELDS = {
  generalInfo: [
    'greenProductionStatus',
    'decarbonizationPlan',
    'laws',
    'socialLegislation',
    'audiovisualRegulation',
    'existingInitiatives',
  ],
  sustainability: [
    'trainTravel',
    'electricCars',
    'gridConnection',
    'wasteManagement',
    'socialRules',
    'otherFacts',
  ],
  resources: [
    'greenConsultants',
    'consultancies',
    'serviceProviders',
    'trainings',
    'tools',
    'networks',
    'caseStudies',
  ],
};

export default function AddInfoModal({ onClose, initialCountry = '' }) {
  const { t } = useTranslation();
  const [mode, setMode] = useState('add');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    country: initialCountry,
    fields: {},
    amendmentSection: '',
    amendmentText: '',
  });
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const catLabel = (catKey) => t(`map.categories.${catKey}`);
  const fieldLabel = (field) => t(`map.subcategories.${field}`);

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
        setError(t('addInfo.errNoTopic'));
        return;
      }
    } else if (!formData.amendmentText.trim()) {
      setError(t('addInfo.errNoCorrection'));
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
            <h3>{t('addInfo.thankYou')}</h3>
            <p>{mode === 'add' ? t('addInfo.successAdd') : t('addInfo.successAmend')}</p>
            <button className="addinfo-btn-primary" onClick={onClose}>
              {t('addInfo.close')}
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
          <h2>{t('addInfo.title')}</h2>
          <button className="addinfo-close" onClick={onClose} aria-label={t('addInfo.close')}>
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
              <strong>{t('addInfo.modeAdd')}</strong>
              <span>{t('addInfo.modeAddDesc')}</span>
            </button>
            <button
              type="button"
              className={`addinfo-mode-btn ${mode === 'amend' ? 'active' : ''}`}
              onClick={() => { setMode('amend'); setError(''); }}
            >
              <strong>{t('addInfo.modeAmend')}</strong>
              <span>{t('addInfo.modeAmendDesc')}</span>
            </button>
          </div>

          <p className="addinfo-lang-note">{t('addInfo.langNote')}</p>

          <div className="addinfo-section addinfo-identity">
            <h3>{t('addInfo.yourDetails')}</h3>
            <div className="addinfo-row">
              <label>
                {t('addInfo.fullName')} *
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
                {t('addInfo.emailLabel')} *
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
                {t('addInfo.organization')} *
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
              {t('addInfo.country')} *
              <input
                type="text"
                required
                placeholder={t('addInfo.countryPlaceholder')}
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </label>
          </div>

          {mode === 'add' && (
            <div className="addinfo-section">
              <h3>{t('addInfo.addQuestion')}</h3>
              <p className="addinfo-hint">{t('addInfo.addHint')}</p>
              {categoryKeys.map((catKey) => (
                <div key={catKey} className="addinfo-topic-group">
                  <span className="addinfo-topic-group-label">{catLabel(catKey)}</span>
                  <div className="addinfo-topic-chips">
                    {CATEGORY_FIELDS[catKey].map((field) => (
                      <button
                        key={field}
                        type="button"
                        className={`addinfo-topic-chip ${selectedTopics.includes(field) ? 'active' : ''}`}
                        onClick={() => toggleTopic(field)}
                      >
                        <span className="addinfo-topic-chip-mark" aria-hidden="true">
                          {selectedTopics.includes(field) ? '–' : '+'}
                        </span>
                        {fieldLabel(field)}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {selectedTopics.length > 0 && (
                <div className="addinfo-selected-topics">
                  {selectedTopics.map((field) => (
                    <label key={field} className="addinfo-field">
                      {fieldLabel(field)}
                      <textarea
                        rows={3}
                        autoFocus={selectedTopics[selectedTopics.length - 1] === field}
                        value={formData.fields[field] || ''}
                        onChange={(e) => handleFieldChange(field, e.target.value)}
                        placeholder={t('addInfo.fieldPlaceholder')}
                      />
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {mode === 'amend' && (
            <div className="addinfo-section">
              <h3>{t('addInfo.amendQuestion')}</h3>
              <p className="addinfo-hint">{t('addInfo.amendHint')}</p>
              <label>
                {t('addInfo.sectionLabel')}
                <select
                  value={formData.amendmentSection}
                  onChange={(e) =>
                    setFormData({ ...formData, amendmentSection: e.target.value })
                  }
                >
                  <option value="">{t('addInfo.wholePage')}</option>
                  {categoryKeys.map((catKey) => (
                    <optgroup key={catKey} label={catLabel(catKey)}>
                      {CATEGORY_FIELDS[catKey].map((field) => (
                        <option key={field} value={field}>
                          {fieldLabel(field)}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>
              <label className="addinfo-field">
                {t('addInfo.correctionLabel')} *
                <textarea
                  rows={5}
                  value={formData.amendmentText}
                  onChange={(e) => {
                    setError('');
                    setFormData({ ...formData, amendmentText: e.target.value });
                  }}
                  placeholder={t('addInfo.correctionPlaceholder')}
                />
              </label>
            </div>
          )}

          {error && <p className="addinfo-error">{error}</p>}

          <div className="addinfo-actions">
            <button type="button" className="addinfo-btn-cancel" onClick={onClose}>
              {t('addInfo.cancel')}
            </button>
            <button type="submit" className="addinfo-btn-primary">
              {t('addInfo.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
