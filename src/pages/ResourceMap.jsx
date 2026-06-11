import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeFilters, setActiveFilters] = useState([]);
  const [showAddInfo, setShowAddInfo] = useState(false);
  const [addInfoCountry, setAddInfoCountry] = useState('');
  // 'visible' until the first click on the globe, then 'fading', then gone.
  const [hintState, setHintState] = useState('visible');

  const dismissHint = useCallback(() => {
    setHintState((prev) => {
      if (prev !== 'visible') return prev;
      setTimeout(() => setHintState('gone'), 1600);
      return 'fading';
    });
  }, []);

  const handleCountryClick = useCallback((countryName) => {
    dismissHint();
    setSelectedCountry((prev) => (prev === countryName ? null : countryName));
  }, [dismissHint]);

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
    if (!query.trim()) return false;
    const normalized = query.trim().toLowerCase();
    const allCountryKeys = Object.keys(countryData);
    // Prefer an exact match, then fall back to a partial match.
    const match =
      allCountryKeys.find(
        (key) =>
          key.toLowerCase() === normalized ||
          countryData[key].name.toLowerCase() === normalized,
      ) ||
      allCountryKeys.find(
        (key) =>
          key.toLowerCase().includes(normalized) ||
          countryData[key].name.toLowerCase().includes(normalized),
      );
    if (match) {
      dismissHint();
      setSelectedCountry(match);
      return true;
    }
    return false;
  }, [dismissHint]);

  return (
    <div className="resource-map">
      <header className="resource-map-intro">
        <h1>{t('map.introTitle')}</h1>
        <p>{t('map.introSubtitle')}</p>
      </header>

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

        {hintState !== 'gone' && (
          <div className={`resource-map-hint ${hintState === 'fading' ? 'fading' : ''}`}>
            {t('map.clickHint')}
          </div>
        )}

        {selectedCountry && (
          <CountryInfoPanel
            country={selectedCountry}
            activeFilters={activeFilters}
            onClose={() => setSelectedCountry(null)}
            onContribute={(name) => {
              setAddInfoCountry(name || '');
              setShowAddInfo(true);
            }}
          />
        )}

        <button
          className="resource-map-add-btn"
          onClick={() => {
            setAddInfoCountry('');
            setShowAddInfo(true);
          }}
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
          {t('map.addInfo')}
        </button>
      </div>

      {showAddInfo && (
        <AddInfoModal
          initialCountry={addInfoCountry}
          onClose={() => setShowAddInfo(false)}
        />
      )}
    </div>
  );
}
