import { useState } from 'react';
import { getCountryData, getAvailableCategories } from '../data/countryData';
import './CountryInfoPanel.css';

export default function CountryInfoPanel({
  country,
  activeFilters,
  onClose,
}) {
  const [expandedSub, setExpandedSub] = useState(null);
  const data = getCountryData(country);

  if (!data) {
    return (
      <div className="country-panel">
        <div className="country-panel-header">
          <h2>{country}</h2>
          <button className="country-panel-close" onClick={onClose}>
            ×
          </button>
        </div>
        <p className="country-panel-empty">
          No data available for this country yet.
        </p>
      </div>
    );
  }

  const availableCategories = getAvailableCategories(country);

  const categoriesToShow =
    activeFilters.length > 0
      ? activeFilters.filter((f) => availableCategories.includes(f))
      : availableCategories;

  const toggleSub = (key) => {
    setExpandedSub(expandedSub === key ? null : key);
  };

  return (
    <div className="country-panel">
      <div className="country-panel-header">
        <h2>{data.name}</h2>
        <button className="country-panel-close" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="country-panel-content">
        {categoriesToShow.map((catKey) => {
          const category = data[catKey];
          if (!category) return null;

          return (
            <div key={catKey} className="country-category">
              <h3 className="country-category-title">{category.label}</h3>
              <div className="country-subcategories">
                {Object.entries(category.subcategories).map(
                  ([subKey, sub]) => {
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
                          <span>{sub.label}</span>
                          <span className="toggle-icon">
                            {isExpanded ? '−' : '+'}
                          </span>
                        </button>
                        {isExpanded && (
                          <div className="country-subcategory-content">
                            {sub.content}
                          </div>
                        )}
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
