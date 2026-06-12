import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScormPlayer from '../components/ScormPlayer';
import { allCourses } from '../data/mockCourses';
import { useScorm } from '../hooks/useScorm';
import './Course.css';

const LANG_LABELS = { en: 'English', fr: 'Français' };

export default function Course() {
  const { id } = useParams();
  const { t } = useTranslation();
  const course = allCourses.find((c) => c.id === id);

  const availableLangs = course
    ? Object.entries(course.scormPackages || {})
        .filter(([, url]) => url)
        .map(([lang]) => lang)
    : [];

  const [selectedLang, setSelectedLang] = useState(availableLangs[0] || 'en');

  const { unifiedStatus } = useScorm(id ?? '', selectedLang);

  if (!course) {
    return <div className="course-page"><p className="course-not-found">{t('course.notFound')}</p></div>;
  }

  const scormUrl = course.scormPackages?.[selectedLang] || '';
  const displayProgress = unifiedStatus.progress || 0;

  return (
    <div className="course-page">
      <div className="course-top-bar">
        <Link to="/dashboard" className="course-back-btn">
          &#8592; {t('course.back')}
        </Link>

        <div className="course-top-info">
          <h1>{t(`courses.${course.i18nKey}.title`)}</h1>
          <div className="course-top-meta">
            <span>{course.duration}</span>
          </div>
        </div>

        {availableLangs.length > 1 && (
          <div className="course-lang-selector">
            {availableLangs.map((lang) => (
              <button
                key={lang}
                className={`course-lang-btn ${lang === selectedLang ? 'active' : ''}`}
                onClick={() => setSelectedLang(lang)}
              >
                {LANG_LABELS[lang] || lang.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        <div className="course-top-progress">
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${displayProgress}%` }} />
          </div>
          <span className="course-top-progress-label">{t('course.complete', { progress: displayProgress })}</span>
        </div>
      </div>

      <ScormPlayer courseId={course.id} scormUrl={scormUrl} lang={selectedLang} />
    </div>
  );
}
