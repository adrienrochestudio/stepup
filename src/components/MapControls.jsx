import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { regions } from '../data/mockLocations';
import './MapControls.css';

export default function MapControls({ onSearch, onRegionChange }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('explore');
  const [searchValue, setSearchValue] = useState('');

  const tabs = [
    { key: 'explore', label: t('map.tabs.explore') },
    { key: 'target', label: t('map.tabs.target') },
    { key: 'scenarios', label: t('map.tabs.scenarios') },
    { key: 'select', label: t('map.tabs.select') },
  ];

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
          placeholder={t('map.searchPlaceholder')}
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
          <option key={r} value={r}>{r === 'All' ? t('map.region') : r}</option>
        ))}
      </select>

      <div className="map-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`map-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
