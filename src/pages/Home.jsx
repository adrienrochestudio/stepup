import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { allCourses } from '../data/mockCourses';
import EnrollModal from '../components/EnrollModal';
import './Home.css';

function getEcoprodUrl(lang) {
  return lang === 'fr' ? 'https://ecoprod.com' : 'https://ecoprod.com/en/';
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const [enrollCourse, setEnrollCourse] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const currentLang = i18n.language?.substring(0, 2) || 'fr';
  const latestCourse = allCourses[allCourses.length - 1];
  const otherCourses = allCourses.slice(0, -1);

  const handleEnrollClick = (course) => {
    if (user) {
      setEnrollCourse(course);
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <div className="home">
      <section className="home-hero">
        <h1>{t('home.title')}</h1>
        <p className="home-tagline">{t('home.tagline')}</p>
        <p className="home-subtitle">{t('home.subtitle')}</p>
        <div className="home-cta">
          {user ? (
            <Link to="/dashboard" className="cta-primary">
              {t('home.ctaCourses')}
            </Link>
          ) : (
            <Link to="/login" className="cta-primary">
              {t('home.ctaStart')}
            </Link>
          )}
          <Link to="/resources/map" className="cta-secondary">
            {t('home.ctaMap')}
          </Link>
        </div>
      </section>

      <section className="home-latest">
        <div className="home-latest-card">
          <div className="home-latest-badge">{t('home.newBadge')}</div>
          <div className="home-latest-content">
            <h2>{t(`courses.${latestCourse.i18nKey}.title`)}</h2>
            <p>{t(`courses.${latestCourse.i18nKey}.description`)}</p>
            <div className="home-latest-meta">
              <span>{latestCourse.duration}</span>
              <span>{latestCourse.modules} {t('courseCard.modules')}</span>
              {latestCourse.free ? (
                <span className="home-latest-price free">{t('courseCard.free')}</span>
              ) : (
                <span className="home-latest-price">{latestCourse.price} €</span>
              )}
            </div>
          </div>
          <button
            className="home-latest-arrow"
            onClick={() => handleEnrollClick(latestCourse)}
            aria-label={t('home.courseDetails')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <section className="home-catalog">
        <h2>{t('home.courseCatalog')}</h2>
        <div className="home-catalog-grid">
          {otherCourses.map((course) => (
            <div
              key={course.id}
              className={`home-catalog-card ${expandedCourse === course.id ? 'expanded' : ''}`}
            >
              <div
                className="home-catalog-card-header"
                onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
              >
                <div className="home-catalog-card-info">
                  <h3>{t(`courses.${course.i18nKey}.title`)}</h3>
                  <div className="home-catalog-card-meta">
                    <span>{course.duration}</span>
                    <span>{course.modules} {t('courseCard.modules')}</span>
                    {course.free ? (
                      <span className="home-catalog-price free">{t('courseCard.free')}</span>
                    ) : (
                      <span className="home-catalog-price">{course.price} €</span>
                    )}
                  </div>
                </div>
                <svg
                  className="home-catalog-chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              {expandedCourse === course.id && (
                <div className="home-catalog-card-details">
                  <p>{t(`courses.${course.i18nKey}.description`)}</p>
                  <button
                    className="home-catalog-enroll"
                    onClick={() => handleEnrollClick(course)}
                  >
                    {t('courseCard.cta.enroll')}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="home-catalog-see-all">
          <Link to={user ? '/dashboard' : '/login'} className="home-see-all-link">
            {t('home.seeAllCourses')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="home-partners-section">
        <div className="home-partner-card">
          <h3>{t('home.ecoprodTitle')}</h3>
          <p>{t('home.ecoprodDesc')}</p>
          <a
            href={getEcoprodUrl(currentLang)}
            target="_blank"
            rel="noopener noreferrer"
            className="home-partner-link"
          >
            {t('home.ecoprodCta')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
        <div className="home-partner-card">
          <h3>{t('home.eurimagesTitle')}</h3>
          <p>{t('home.eurimagesDesc')}</p>
          <a
            href="https://www.coe.int/en/web/eurimages"
            target="_blank"
            rel="noopener noreferrer"
            className="home-partner-link"
          >
            {t('home.eurimagesCta')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </section>

      {enrollCourse && (
        <EnrollModal
          course={enrollCourse}
          onClose={() => setEnrollCourse(null)}
          onEnrolled={() => setEnrollCourse(null)}
        />
      )}
    </div>
  );
}
