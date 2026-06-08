import { useState, useCallback } from 'react';
import GlobeView from '../components/GlobeView';
import MapControls from '../components/MapControls';
import CountryInfoPanel from '../components/CountryInfoPanel';
import AddInfoModal from '../components/AddInfoModal';
import './ResourceMap.css';

export default function ResourceMap() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeFilters, setActiveFilters] = useState([]);
  const [showAddInfo, setShowAddInfo] = useState(false);

  const handleCountryClick = useCallback((countryName) => {
    setSelectedCountry((prev) => (prev === countryName ? null : countryName));
  }, []);

  const handleToggleFilter = useCallback((catKey) => {
    setActiveFilters((prev) =>
      prev.includes(catKey)
        ? prev.filter((k) => k !== catKey)
        : [...prev, catKey],
    );
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
