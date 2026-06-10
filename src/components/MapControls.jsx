import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { countryData, categoryKeys } from '../data/countryData';
import './MapControls.css';

const ALL_COUNTRIES = Object.entries(countryData)
  .map(([key, val]) => ({ key, name: val.name }))
  .sort((a, b) => a.name.localeCompare(b.name));

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
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const suggestions = useMemo(() => {
    const q = searchValue.trim().toLowerCase();
    if (!q) return [];
    return ALL_COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.key.toLowerCase().includes(q),
    ).slice(0, 6);
  }, [searchValue]);

  const runSearch = (query) => {
    const found = onSearch ? onSearch(query) : false;
    setNoResult(!found);
    setShowSuggestions(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) runSearch(searchValue);
  };

  const handleSuggestionClick = (country) => {
    setSearchValue(country.name);
    runSearch(country.name);
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
      <div className="map-controls-search">
        <form className="map-search" onSubmit={handleSearchSubmit} autoComplete="off">
          <svg className="map-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder={t('map.searchPlaceholder')}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setShowSuggestions(true);
              setNoResult(false);
            }}
            onFocus={() => searchValue.trim() && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="map-search-suggestions">
              {suggestions.map((c) => (
                <li key={c.key}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSuggestionClick(c)}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
          {noResult && (
            <span className="map-search-noresult">{t('map.noResults')}</span>
          )}
        </form>
      </div>

      <div className="map-controls-filters">
        <span className="map-filters-label">{t('map.filterLabel')}</span>
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
                {t(`map.categories.${catKey}`)}
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
              {t('map.clearAll')}
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
            <span>{t('map.selectAll')}</span>
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
                  {t(`map.subcategories.${sub.key}`, {
                    defaultValue: sub.label.replace(/\s*\(\d\/5\)\s*$/, ''),
                  })}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
