import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WebinarCard from '../components/WebinarCard';
import WebinarModal from '../components/WebinarModal';
import { mockWebinars } from '../data/mockWebinars';
import './Webinars.css';

export default function Webinars() {
  const { t } = useTranslation();
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
        <div>
          <h1>{t('webinars.title')}</h1>
          <p className="webinars-subtitle">
            {t('webinars.allInEnglish')}{' '}
            <Link to="/resources/map">{t('webinars.seeMap')}</Link>{' '}
            {t('webinars.andThe')}{' '}
            <Link to="/dashboard">{t('webinars.seeCourses')}</Link>.
          </p>
        </div>
        <div className="webinars-search">
          <span>&#128269;</span>
          <input
            type="text"
            placeholder={t('webinars.searchPlaceholder')}
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
          <p className="webinars-empty">{t('webinars.noResults')}</p>
        )}
      </div>

      <WebinarModal
        webinar={selectedWebinar}
        onClose={() => setSelectedWebinar(null)}
      />
    </div>
  );
}
