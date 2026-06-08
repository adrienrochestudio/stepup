import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { feature } from 'topojson-client';
import * as THREE from 'three';
import { countryData } from '../data/countryData';
import './GlobeView.css';

const COUNTRIES_WITH_DATA = Object.keys(countryData);

const COLOR_SEA = '#c8ced8';
const COLOR_ACTIVE = '#bdc609';
const COLOR_INACTIVE = '#d4d8c4';
const COLOR_HOVER = '#a0b800';
const COLOR_SELECTED = '#3d4712';

function hasData(feat) {
  const name = feat.properties.ADMIN || feat.properties.name || '';
  return COUNTRIES_WITH_DATA.includes(name);
}

export default function GlobeView({ onCountryClick, selectedCountry }) {
  const globeRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [countries, setCountries] = useState([]);
  const [hovered, setHovered] = useState(null);

  const globeMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: COLOR_SEA, transparent: false }),
    [],
  );

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((res) => res.json())
      .then((topoData) => {
        const geoJson = feature(topoData, topoData.objects.countries);
        setCountries(geoJson.features);
      });
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
    globe.controls().minDistance = 150;
    globe.controls().maxDistance = 500;

    globe.pointOfView({ lat: 48, lng: 10, altitude: 1.1 }, 0);
  }, []);

  const handleZoom = useCallback((dir) => {
    const globe = globeRef.current;
    if (!globe) return;
    const pov = globe.pointOfView();
    const newAlt =
      dir === 'in'
        ? Math.max(0.4, pov.altitude * 0.7)
        : Math.min(3, pov.altitude * 1.4);
    globe.pointOfView({ ...pov, altitude: newAlt }, 300);
  }, []);

  const getPolygonCapColor = useCallback(
    (feat) => {
      const name = feat.properties.name || '';
      if (selectedCountry === name) return COLOR_SELECTED;
      if (hovered === name) return COLOR_HOVER;
      if (hasData(feat)) return COLOR_ACTIVE;
      return COLOR_INACTIVE;
    },
    [hovered, selectedCountry],
  );

  const getPolygonSideColor = useCallback(() => 'rgba(0,0,0,0.05)', []);
  const getPolygonStroke = useCallback(() => '#ffffff', []);

  const handlePolygonHover = useCallback((feat) => {
    setHovered(feat ? feat.properties.name || '' : null);
  }, []);

  const handlePolygonClick = useCallback(
    (feat) => {
      const name = feat.properties.name || '';
      if (onCountryClick) onCountryClick(name);

      const globe = globeRef.current;
      if (!globe) return;
      const coords = feat.bbox
        ? {
            lat: (feat.bbox[1] + feat.bbox[3]) / 2,
            lng: (feat.bbox[0] + feat.bbox[2]) / 2,
          }
        : null;
      if (coords) {
        globe.pointOfView({ ...coords, altitude: 1.0 }, 600);
      }
    },
    [onCountryClick],
  );

  const getPolygonLabel = useCallback(
    (feat) => {
      const name = feat.properties.name || '';
      if (hasData(feat)) return `<span class="globe-label active">${name}</span>`;
      return `<span class="globe-label">${name}</span>`;
    },
    [],
  );

  return (
    <div className="globe-container" ref={containerRef}>
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="#ffffff"
        globeImageUrl=""
        showGlobe={true}
        showAtmosphere={false}
        globeMaterial={globeMaterial}
        polygonsData={countries}
        polygonCapColor={getPolygonCapColor}
        polygonSideColor={getPolygonSideColor}
        polygonStrokeColor={getPolygonStroke}
        polygonAltitude={(feat) =>
          (selectedCountry === (feat.properties.name || '')) ? 0.02 : 0.005
        }
        polygonLabel={getPolygonLabel}
        onPolygonHover={handlePolygonHover}
        onPolygonClick={handlePolygonClick}
      />

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
