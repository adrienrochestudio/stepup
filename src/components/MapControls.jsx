import { useState } from 'react';
import { countryData, categoryKeys } from '../data/countryData';
import './MapControls.css';

const CATEGORY_LABELS = {
  generalInfo: 'General Information',
  sustainability: 'Sustainability & Logistics',
  resources: 'Resources',
};

function getSubcategories(catKey) {
  const france = countryData.France;
  if (!france || !france[catKey]) return [];
  return Object.entries(france[catKey].subcategories).map(([key, val]) => ({
    key,
    fullKey: `${catKey}.${key}`,
    label: val.label,
  }));
}

export default function MapControls({
  onSearch,
  activeFilters,
  onToggleFilter,
  onToggleAllCategory,
}) {
  const [searchValue, setSearchValue] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchValue);
  };

  const toggleExpand = (catKey) => {
    setExpandedCategory(expandedCategory === catKey ? null : catKey);
  };

  const expandedSubs = expandedCategory
    ? getSubcategories(expandedCategory)
    : [];

  const hasCategoryActive = (catKey) => {
    const subs = getSubcategories(catKey);
    return subs.some((s) => activeFilters.includes(s.fullKey));
  };

  const allCategoryActive = (catKey) => {
    const subs = getSubcategories(catKey);
    return subs.length > 0 && subs.every((s) => activeFilters.includes(s.fullKey));
  };

  return (
    <div className="map-controls">
      <div className="map-controls-bar">
        <form className="map-search" onSubmit={handleSearchSubmit}>
          <svg className="map-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search a country..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>

        <div className="map-category-tabs">
          {categoryKeys.map((catKey) => {
            const hasActive = hasCategoryActive(catKey);
            const isExpanded = expandedCategory === catKey;

            return (
              <button
                key={catKey}
                className={`map-category-tab ${hasActive ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleExpand(catKey)}
              >
                {CATEGORY_LABELS[catKey]}
                {hasActive && (
                  <span className="tab-count">
                    {expandedSubs.length > 0 && expandedCategory === catKey
                      ? expandedSubs.filter((s) => activeFilters.includes(s.fullKey)).length
                      : getSubcategories(catKey).filter((s) => activeFilters.includes(s.fullKey)).length}
                  </span>
                )}
                <svg
                  className={`tab-chevron ${isExpanded ? 'open' : ''}`}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            );
          })}

          {activeFilters.length > 0 && (
            <button
              className="map-clear-filters"
              onClick={() => onToggleAllCategory(null)}
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {expandedCategory && (
        <div className="map-category-panel">
          <label className="map-panel-toggle">
            <input
              type="checkbox"
              checked={allCategoryActive(expandedCategory)}
              onChange={() => onToggleAllCategory(expandedCategory)}
            />
            <span>Select all</span>
          </label>
          <div className="map-panel-subs">
            {expandedSubs.map((sub) => {
              const isActive = activeFilters.includes(sub.fullKey);
              return (
                <button
                  key={sub.key}
                  className={`map-panel-sub-tag ${isActive ? 'active' : ''}`}
                  onClick={() => onToggleFilter(sub.fullKey)}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
