import { useState } from 'react';
import { regions } from '../data/mockLocations';
import './MapControls.css';

const tabs = [
  'Explorer les données',
  'Cibler des territoires',
  'Scénarios',
  'Sélectionner une donnée',
];

export default function MapControls({ onSearch, onRegionChange }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className="map-controls">
      <form className="map-search" onSubmit={handleSearchSubmit}>
        <span className="map-search-icon">&#128269;</span>
        <input
          type="text"
          placeholder="Search country or city..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>

      <select
        className="map-region-select"
        onChange={(e) => onRegionChange(e.target.value)}
        defaultValue="All"
      >
        {regions.map((r) => (
          <option key={r} value={r}>{r === 'All' ? 'Région' : r}</option>
        ))}
      </select>

      <div className="map-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`map-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
