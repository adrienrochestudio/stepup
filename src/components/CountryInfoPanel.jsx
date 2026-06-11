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
  // Capturing group → split keeps the URLs at odd indices. We then peel any
  // trailing punctuation (e.g. a closing paren or period that follows a URL
  // in prose) off the link so the href stays valid and the punctuation
  // renders as plain text.
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split('\n').map((line, i) => {
    const parts = line.split(urlRegex);
    return (
      <p key={i} className="content-line">
        {parts.map((part, j) => {
          if (j % 2 === 0) return <span key={j}>{part}</span>;
          const [, href, trailing] = part.match(/^(.*?)([.,;:)\]]*)$/);
          return (
            <span key={j}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {href}
              </a>
              {trailing}
            </span>
          );
        })}
      </p>
    );
  });
}

export default function CountryInfoPanel({ country, activeFilters, onClose, onContribute }) {
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

  // Pages with only a handful of entries get an explicit "help us complete
  // this" note in the credit banner.
  const subCount = categoryKeys.reduce(
    (n, k) => n + Object.keys(data[k]?.subcategories || {}).length,
    0,
  );
  const isSparse = subCount <= 4;

  const toggleSub = (key) => {
    setExpandedSub(expandedSub === key ? null : key);
  };

  return (
    <div className="country-panel-overlay">
      <div className="country-panel">
        <div className="country-panel-header">
          <div className="country-panel-title-row">
            <h2>{data.name}</h2>
            {(data.credit || data.sources) && (
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
        {showCredit && (data.credit || data.sources) && (
          <div className="country-credit-banner">
            {data.credit ? (
              data.credit
            ) : (
              <>
                This factsheet was compiled by the StepUP team from publicly
                available resources: {data.sources}.
                {isSparse &&
                  ' This page is still light on information, and we would love to complete it.'}{' '}
                If you have information or comments, please{' '}
                <button
                  type="button"
                  className="country-credit-contribute"
                  onClick={() => onContribute && onContribute(data.name)}
                >
                  contribute
                </button>
                .
              </>
            )}
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
