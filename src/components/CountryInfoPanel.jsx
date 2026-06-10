import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCountryData, getAvailableCategories, categoryKeys } from '../data/countryData';
import './CountryInfoPanel.css';

const CATEGORY_I18N_KEYS = ['generalInfo', 'sustainability', 'resources'];

// Subcategory titles are translated via i18n; only the content stays in
// English. Ratings like "(4/5)" are country-specific, so they are kept
// from the data label and re-appended after the translated title.
function subcategoryLabel(t, subKey, rawLabel) {
  const rating = rawLabel?.match(/\(\d\/5\)\s*$/);
  const base = t(`map.subcategories.${subKey}`, {
    defaultValue: rawLabel?.replace(/\s*\(\d\/5\)\s*$/, '') || subKey,
  });
  return rating ? `${base} ${rating[0].trim()}` : base;
}

function renderContent(text) {
  if (!text) return null;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split('\n').map((line, i) => {
    const parts = line.split(urlRegex);
    return (
      <p key={i} className="content-line">
        {parts.map((part, j) =>
          urlRegex.test(part) ? (
            <a key={j} href={part} target="_blank" rel="noopener noreferrer">
              {part}
            </a>
          ) : (
            <span key={j}>{part}</span>
          ),
        )}
      </p>
    );
  });
}

export default function CountryInfoPanel({ country, activeFilters, onClose }) {
  const { t } = useTranslation();
  const [expandedSub, setExpandedSub] = useState(null);
  const [showCredit, setShowCredit] = useState(false);
  const data = getCountryData(country);

  if (!data) {
    return (
      <div className="country-panel-overlay">
        <div className="country-panel">
          <div className="country-panel-header">
            <h2>{country}</h2>
            <button className="country-panel-close" onClick={onClose}>
              ×
            </button>
          </div>
          <p className="country-panel-empty">
            {t('map.noData')}
          </p>
        </div>
      </div>
    );
  }

  const hasFilters = activeFilters.length > 0;
  const availableCategories = getAvailableCategories(country);

  const toggleSub = (key) => {
    setExpandedSub(expandedSub === key ? null : key);
  };

  return (
    <div className="country-panel-overlay">
      <div className="country-panel">
        <div className="country-panel-header">
          <div className="country-panel-title-row">
            <h2>{data.name}</h2>
            {data.credit && (
              <button
                className="country-credit-btn"
                onClick={() => setShowCredit(!showCredit)}
                title="Factsheet credit"
                aria-label="Show factsheet credit"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </button>
            )}
          </div>
          <button className="country-panel-close" onClick={onClose}>
            ×
          </button>
        </div>
        {showCredit && data.credit && (
          <div className="country-credit-banner">
            {data.credit}
          </div>
        )}

        <div className="country-panel-content">
          {availableCategories.map((catKey) => {
            const category = data[catKey];
            if (!category) return null;

            const subcatEntries = Object.entries(category.subcategories);

            const visibleSubs = hasFilters
              ? subcatEntries.filter(([subKey]) =>
                  activeFilters.includes(`${catKey}.${subKey}`),
                )
              : subcatEntries;

            if (visibleSubs.length === 0) return null;

            return (
              <div key={catKey} className="country-category">
                <h3 className="country-category-title">
                  {CATEGORY_I18N_KEYS.includes(catKey)
                    ? t(`map.categories.${catKey}`)
                    : category.label}
                </h3>
                <div className="country-subcategories">
                  {visibleSubs.map(([subKey, sub]) => {
                    const fullKey = `${catKey}.${subKey}`;
                    const isExpanded = expandedSub === fullKey;

                    return (
                      <div
                        key={subKey}
                        className={`country-subcategory ${isExpanded ? 'expanded' : ''}`}
                      >
                        <button
                          className="country-subcategory-toggle"
                          onClick={() => toggleSub(fullKey)}
                        >
                          <span>{subcategoryLabel(t, subKey, sub.label)}</span>
                          <span className="toggle-icon">
                            {isExpanded ? '−' : '+'}
                          </span>
                        </button>
                        {isExpanded && (
                          <div className="country-subcategory-content">
                            {renderContent(sub.content)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
