import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Globe from 'react-globe.gl';
import { feature } from 'topojson-client';
import { geoCentroid } from 'd3';
import * as THREE from 'three';
import { countryData } from '../data/countryData';
import './GlobeView.css';

const COUNTRIES_WITH_DATA = Object.keys(countryData);

// Map TopoJSON names to countryData keys when they differ
const TOPOJSON_TO_DATA = {
  'Czechia': 'Czech Republic',
  'Turkey': 'Türkiye',
  'United States': 'United States of America',
};

function resolveCountryName(topoName) {
  if (COUNTRIES_WITH_DATA.includes(topoName)) return topoName;
  return TOPOJSON_TO_DATA[topoName] || topoName;
}

const COLOR_SEA = '#f8f9f7';
const COLOR_ACTIVE = '#9aad1e';
const COLOR_INACTIVE = '#b8c29a';
const COLOR_HOVER = '#cdd6b0';
const COLOR_SELECTED = '#3d4712';

function hasData(feat) {
  const name = feat.properties.ADMIN || feat.properties.name || '';
  const resolved = resolveCountryName(name);
  return COUNTRIES_WITH_DATA.includes(resolved);
}

export default function GlobeView({ onCountryClick, selectedCountry }) {
  const { t } = useTranslation();
  const globeRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [countries, setCountries] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [loadError, setLoadError] = useState(false);

  const globeMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: COLOR_SEA, transparent: false }),
    [],
  );

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load map data');
        return res.json();
      })
      .then((topoData) => {
        const geoJson = feature(topoData, topoData.objects.countries);
        setCountries(geoJson.features);
      })
      .catch(() => setLoadError(true));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setDimensions({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    globe.controls().autoRotate = false;
    globe.controls().enableZoom = true;
    globe.controls().minDistance = 110;
    globe.controls().maxDistance = 500;
    globe.controls().enableDamping = true;
    globe.controls().dampingFactor = 0.15;
    globe.controls().minPolarAngle = Math.PI * 0.15;
    globe.controls().maxPolarAngle = Math.PI * 0.85;

    globe.pointOfView({ lat: 48, lng: 10, altitude: 1.1 }, 0);
  }, []);

  // Fly to the selected country (works for both search and click)
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe || !selectedCountry || countries.length === 0) return;
    const feat = countries.find(
      (f) => resolveCountryName(f.properties.name || '') === selectedCountry,
    );
    if (!feat) return;
    const [lng, lat] = geoCentroid(feat);
    if (Number.isFinite(lat) && Number.isFinite(lng)) {
      globe.pointOfView({ lat, lng, altitude: 1.0 }, 800);
    }
  }, [selectedCountry, countries]);

  const handleZoom = useCallback((dir) => {
    const globe = globeRef.current;
    if (!globe) return;
    const pov = globe.pointOfView();
    const newAlt =
      dir === 'in'
        ? Math.max(0.25, pov.altitude * 0.7)
        : Math.min(3, pov.altitude * 1.4);
    globe.pointOfView({ ...pov, altitude: newAlt }, 300);
  }, []);

  const getPolygonCapColor = useCallback(
    (feat) => {
      const name = feat.properties.name || '';
      const resolved = resolveCountryName(name);
      if (selectedCountry === resolved) return COLOR_SELECTED;
      if (hovered === resolved) return COLOR_HOVER;
      if (hasData(feat)) return COLOR_ACTIVE;
      return COLOR_INACTIVE;
    },
    [hovered, selectedCountry],
  );

  const getPolygonSideColor = useCallback(() => 'rgba(0,0,0,0.05)', []);

  const handlePolygonHover = useCallback((feat) => {
    setHovered(feat ? resolveCountryName(feat.properties.name || '') : null);
    document.body.style.cursor = feat ? 'pointer' : 'default';
  }, []);

  const handlePolygonClick = useCallback(
    (feat) => {
      const name = resolveCountryName(feat.properties.name || '');
      if (onCountryClick) onCountryClick(name);
      // Recentering is handled by the selectedCountry effect above.
    },
    [onCountryClick],
  );

  const getPolygonLabel = useCallback(
    (feat) => {
      const name = feat.properties.name || '';
      return `<span class="globe-label">${name}</span>`;
    },
    [],
  );

  return (
    <div className="globe-container" ref={containerRef}>
      {countries.length === 0 && (
        <div className="globe-status">
          {loadError ? t('map.loadError') : t('common.loading')}
        </div>
      )}

      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="#ffffff"
        globeImageUrl=""
        showGlobe={true}
        showAtmosphere={true}
        atmosphereColor="#c8d490"
        atmosphereAltitude={0.08}
        globeMaterial={globeMaterial}
        polygonsData={countries}
        polygonCapColor={getPolygonCapColor}
        polygonSideColor={getPolygonSideColor}
        polygonStrokeColor={() => 'rgba(255,255,255,0.3)'}
        polygonAltitude={(feat) =>
          selectedCountry === resolveCountryName(feat.properties.name || '') ? 0.015 : 0.004
        }
        polygonLabel={getPolygonLabel}
        onPolygonHover={handlePolygonHover}
        onPolygonClick={handlePolygonClick}
      />

      <div className="globe-legend">
        <span className="globe-legend-item">
          <span className="globe-legend-swatch" style={{ background: COLOR_ACTIVE }} />
          {t('map.legendData')}
        </span>
        <span className="globe-legend-item">
          <span className="globe-legend-swatch" style={{ background: COLOR_INACTIVE }} />
          {t('map.legendNoData')}
        </span>
      </div>

      <div className="globe-zoom-controls">
        <button onClick={() => handleZoom('in')} aria-label="Zoom in">
          +
        </button>
        <button onClick={() => handleZoom('out')} aria-label="Zoom out">
          −
        </button>
      </div>
    </div>
  );
}
