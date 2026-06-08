import { useState, useMemo } from 'react';
import GlobeView from '../components/GlobeView';
import MapControls from '../components/MapControls';
import { mockLocations } from '../data/mockLocations';
import './ResourceMap.css';

export default function ResourceMap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredLocations = useMemo(() => {
    if (selectedRegion === 'All') return mockLocations;
    return mockLocations.filter((loc) => loc.region === selectedRegion);
  }, [selectedRegion]);

  return (
    <div className="resource-map">
      <MapControls
        onSearch={setSearchQuery}
        onRegionChange={setSelectedRegion}
      />
      <GlobeView
        locations={filteredLocations}
        focusTarget={searchQuery}
      />
    </div>
  );
}
