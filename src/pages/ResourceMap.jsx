import { useState, useCallback } from 'react';
import GlobeView from '../components/GlobeView';
import MapControls from '../components/MapControls';
import CountryInfoPanel from '../components/CountryInfoPanel';
import AddInfoModal from '../components/AddInfoModal';
import { countryData, categoryKeys } from '../data/countryData';
import './ResourceMap.css';

function getAllSubKeys(catKey) {
  const france = countryData.France;
  if (!france || !france[catKey]) return [];
  return Object.keys(france[catKey].subcategories).map(
    (k) => `${catKey}.${k}`,
  );
}

export default function ResourceMap() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeFilters, setActiveFilters] = useState([]);
  const [showAddInfo, setShowAddInfo] = useState(false);

  const handleCountryClick = useCallback((countryName) => {
    setSelectedCountry((prev) => (prev === countryName ? null : countryName));
  }, []);

  const handleToggleFilter = useCallback((subFullKey) => {
    setActiveFilters((prev) =>
      prev.includes(subFullKey)
        ? prev.filter((k) => k !== subFullKey)
        : [...prev, subFullKey],
    );
  }, []);

  const handleToggleAllCategory = useCallback((catKey) => {
    if (!catKey) {
      setActiveFilters([]);
      return;
    }
    const allSubs = getAllSubKeys(catKey);
    setActiveFilters((prev) => {
      const allActive = allSubs.every((s) => prev.includes(s));
      if (allActive) {
        return prev.filter((k) => !allSubs.includes(k));
      }
      return [...new Set([...prev, ...allSubs])];
    });
  }, []);

  const handleSearch = useCallback((query) => {
    if (!query.trim()) return;
    const normalized = query.trim();
    setSelectedCountry(
      normalized.charAt(0).toUpperCase() + normalized.slice(1),
    );
  }, []);

  return (
    <div className="resource-map">
      <MapControls
        onSearch={handleSearch}
        activeFilters={activeFilters}
        onToggleFilter={handleToggleFilter}
        onToggleAllCategory={handleToggleAllCategory}
      />

      <div className="resource-map-globe-area">
        <GlobeView
          onCountryClick={handleCountryClick}
          selectedCountry={selectedCountry}
        />

        {selectedCountry && (
          <CountryInfoPanel
            country={selectedCountry}
            activeFilters={activeFilters}
            onClose={() => setSelectedCountry(null)}
          />
        )}

        <button
          className="resource-map-add-btn"
          onClick={() => setShowAddInfo(true)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add info
        </button>
      </div>

      {showAddInfo && <AddInfoModal onClose={() => setShowAddInfo(false)} />}
    </div>
  );
}
