import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { scaleSequentialSqrt } from 'd3-scale';
import { interpolateYlGn } from 'd3-scale-chromatic';
import './GlobeView.css';

const colorScale = scaleSequentialSqrt(interpolateYlGn).domain([0, 100]);

export default function GlobeView({ locations, focusTarget }) {
  const globeRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [tooltip, setTooltip] = useState(null);

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

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
    globe.controls().enableZoom = true;

    globe.pointOfView({ lat: 46, lng: 2, altitude: 2.2 }, 0);
  }, []);

  useEffect(() => {
    if (!focusTarget || !globeRef.current) return;

    const loc = locations.find(
      (l) =>
        l.country.toLowerCase().includes(focusTarget.toLowerCase()) ||
        l.city.toLowerCase().includes(focusTarget.toLowerCase()),
    );
    if (loc) {
      globeRef.current.pointOfView({ lat: loc.lat, lng: loc.lng, altitude: 1.5 }, 1000);
    }
  }, [focusTarget, locations]);

  const handleZoom = useCallback((dir) => {
    const globe = globeRef.current;
    if (!globe) return;
    const pov = globe.pointOfView();
    const newAlt = dir === 'in'
      ? Math.max(0.5, pov.altitude * 0.7)
      : Math.min(4, pov.altitude * 1.4);
    globe.pointOfView({ ...pov, altitude: newAlt }, 300);
  }, []);

  const pointColor = useCallback((d) => colorScale(d.value), []);
  const pointAltitude = useCallback((d) => d.value * 0.001 + 0.01, []);
  const pointRadius = useCallback((d) => Math.sqrt(d.value) * 0.12 + 0.3, []);

  const handlePointHover = useCallback((point, _prevPoint, { x, y }) => {
    if (point) {
      setTooltip({ x, y, data: point });
    } else {
      setTooltip(null);
    }
  }, []);

  const globeImageUrl = useMemo(
    () => '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    [],
  );
  const bumpImageUrl = useMemo(
    () => '//unpkg.com/three-globe/example/img/earth-topology.png',
    [],
  );

  return (
    <div className="globe-container" ref={containerRef}>
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl={globeImageUrl}
        bumpImageUrl={bumpImageUrl}
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor="#bdc609"
        atmosphereAltitude={0.2}
        pointsData={locations}
        pointLat="lat"
        pointLng="lng"
        pointColor={pointColor}
        pointAltitude={pointAltitude}
        pointRadius={pointRadius}
        pointLabel={(d) => `${d.city}, ${d.country}`}
        onPointHover={handlePointHover}
      />

      {tooltip && (
        <div
          className="globe-tooltip"
          style={{ left: tooltip.x + 12, top: tooltip.y - 40 }}
        >
          <strong>{tooltip.data.city}</strong>
          {tooltip.data.country} — {tooltip.data.region}
          <br />
          Score: {tooltip.data.value}
        </div>
      )}

      <div className="globe-zoom-controls">
        <button onClick={() => handleZoom('in')} aria-label="Zoom in">+</button>
        <button onClick={() => handleZoom('out')} aria-label="Zoom out">−</button>
      </div>
    </div>
  );
}
