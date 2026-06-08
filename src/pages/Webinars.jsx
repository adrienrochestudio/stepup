import { useState, useMemo } from 'react';
import WebinarCard from '../components/WebinarCard';
import WebinarModal from '../components/WebinarModal';
import { mockWebinars } from '../data/mockWebinars';
import './Webinars.css';

export default function Webinars() {
  const [search, setSearch] = useState('');
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return mockWebinars;
    const q = search.toLowerCase();
    return mockWebinars.filter(
      (w) =>
        w.title.toLowerCase().includes(q) ||
        w.speaker.toLowerCase().includes(q),
    );
  }, [search]);

  return (
    <div className="webinars-page">
      <div className="webinars-header">
        <h1>Webinar Library</h1>
        <div className="webinars-search">
          <span>&#128269;</span>
          <input
            type="text"
            placeholder="Search webinars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="webinars-grid">
        {filtered.length > 0 ? (
          filtered.map((w) => (
            <WebinarCard
              key={w.id}
              webinar={w}
              onClick={setSelectedWebinar}
            />
          ))
        ) : (
          <p className="webinars-empty">No webinars found.</p>
        )}
      </div>

      <WebinarModal
        webinar={selectedWebinar}
        onClose={() => setSelectedWebinar(null)}
      />
    </div>
  );
}
