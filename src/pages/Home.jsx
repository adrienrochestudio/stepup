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

  const currentLang = i18n.language?.substring(0, 2) || 'fr';
  const latestCourse = allCourses[allCourses.length - 1];
  const otherCourses = allCourses.slice(0, -1);

  const handleCourseClick = (course) => {
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
        <div className="home-latest-card" onClick={() => handleCourseClick(latestCourse)}>
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
          <div className="home-latest-arrow" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </section>

      <section className="home-catalog">
        <h2>{t('home.courseCatalog')}</h2>
        <div className="home-catalog-grid">
          {otherCourses.map((course) => (
            <div
              key={course.id}
              className="home-catalog-card"
              onClick={() => handleCourseClick(course)}
            >
              <div className="home-catalog-card-top">
                {course.free ? (
                  <span className="home-catalog-badge free">{t('courseCard.free')}</span>
                ) : (
                  <span className="home-catalog-badge">{course.price} €</span>
                )}
              </div>
              <h3>{t(`courses.${course.i18nKey}.title`)}</h3>
              <p>{t(`courses.${course.i18nKey}.description`)}</p>
              <div className="home-catalog-card-footer">
                <div className="home-catalog-card-meta">
                  <span>{course.duration}</span>
                  <span>{course.modules} {t('courseCard.modules')}</span>
                </div>
                <span className="home-catalog-card-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
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
          <div className="home-partner-header">
            <h3>{t('home.ecoprodTitle')}</h3>
            <a
              href={getEcoprodUrl(currentLang)}
              target="_blank"
              rel="noopener noreferrer"
              className="home-partner-link"
              onClick={(e) => e.stopPropagation()}
            >
              {t('home.ecoprodCta')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
          <p>{t('home.ecoprodDesc')}</p>
        </div>
        <div className="home-partner-card">
          <div className="home-partner-header">
            <h3>{t('home.eurimagesTitle')}</h3>
            <a
              href="https://www.coe.int/en/web/eurimages"
              target="_blank"
              rel="noopener noreferrer"
              className="home-partner-link"
              onClick={(e) => e.stopPropagation()}
            >
              {t('home.eurimagesCta')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
          <p>{t('home.eurimagesDesc')}</p>
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
