import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { allCourses } from '../data/mockCourses';
import EnrollModal from '../components/EnrollModal';
import RotatingTitleWord from '../components/RotatingTitleWord';
import './Home.css';

function getEcoprodUrl(lang) {
  return lang === 'fr' ? 'https://ecoprod.com' : 'https://ecoprod.com/en/';
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [enrollCourse, setEnrollCourse] = useState(null);
  const [partnerPopup, setPartnerPopup] = useState(null);

  const currentLang = i18n.language?.substring(0, 2) || 'fr';
  const latestCourse = allCourses[allCourses.length - 1];
  const otherCourses = allCourses.slice(0, -1);

  const handleCourseClick = (course) => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (course.free) {
      navigate(`/course/${course.id}`);
      return;
    }
    setEnrollCourse(course);
  };

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1>
            <span className="home-hero-line">{t('home.titlePrefix')}</span>
            <RotatingTitleWord items={t('home.titleRotating', { returnObjects: true })} />
            <span className="home-hero-line">{t('home.titleSuffix')}</span>
          </h1>
          <p className="home-tagline">{t('home.tagline')}</p>
          {t('home.subtitle') && <p className="home-subtitle">{t('home.subtitle')}</p>}
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
          <p className="home-audience">
            {t('home.audiencePrefix')}{' '}
            <RotatingTitleWord
              items={t('home.audienceRotating', { returnObjects: true })}
            />
          </p>
        </div>
        <div className="home-hero-visual">
          <img src={`${import.meta.env.BASE_URL}images/imagecomputer.png`} alt="" />
        </div>
      </section>

      <div className="home-courses-band">
      <section className="home-latest">
        <div className="home-latest-card" onClick={() => handleCourseClick(latestCourse)}>
          <div className="home-latest-badge">{t('home.newBadge')}</div>
          <div className="home-latest-content">
            <h2>{t(`courses.${latestCourse.i18nKey}.title`)}</h2>
            <p>{t(`courses.${latestCourse.i18nKey}.description`)}</p>
            <div className="home-latest-meta">
              <span>{latestCourse.duration}</span>
              {latestCourse.free && (
                <span className="home-latest-price free">{t('courseCard.free')}</span>
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
              {course.free && (
                <div className="home-catalog-card-top">
                  <span className="home-catalog-badge free">{t('courseCard.free')}</span>
                </div>
              )}
              <h3>{t(`courses.${course.i18nKey}.title`)}</h3>
              <p>{t(`courses.${course.i18nKey}.description`)}</p>
              <div className="home-catalog-card-footer">
                <div className="home-catalog-card-meta">
                  <span>{course.duration}</span>
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
      </div>

      <section className="home-partners-section">
        <p className="home-partners-intro">{t('home.partnersIntro')}</p>
        <div className="home-partner-logos">
          <button
            className="home-partner-logo-btn"
            onClick={() => setPartnerPopup(partnerPopup === 'ecoprod' ? null : 'ecoprod')}
            aria-label="Ecoprod"
          >
            <img src={`${import.meta.env.BASE_URL}logo_ecoprod.png`} alt="Ecoprod" />
          </button>
          <button
            className="home-partner-logo-btn"
            onClick={() => setPartnerPopup(partnerPopup === 'eurimages' ? null : 'eurimages')}
            aria-label="Eurimages"
          >
            <img src={`${import.meta.env.BASE_URL}COE_logo_eurimages_no-background.png`} alt="Eurimages" />
          </button>
        </div>

        {partnerPopup === 'ecoprod' && (
          <div className="home-partner-popup">
            <button className="home-partner-popup-close" onClick={() => setPartnerPopup(null)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
            <h3>{t('home.ecoprodTitle')}</h3>
            <p>{t('home.ecoprodDesc')}</p>
            <a href={getEcoprodUrl(currentLang)} target="_blank" rel="noopener noreferrer" className="home-partner-popup-cta">
              {t('home.ecoprodCta')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        )}

        {partnerPopup === 'eurimages' && (
          <div className="home-partner-popup">
            <button className="home-partner-popup-close" onClick={() => setPartnerPopup(null)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
            <h3>{t('home.eurimagesTitle')}</h3>
            <p>{t('home.eurimagesDesc')}</p>
            <a href="https://www.coe.int/en/web/eurimages" target="_blank" rel="noopener noreferrer" className="home-partner-popup-cta">
              {t('home.eurimagesCta')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        )}
      </section>

      <section className="home-newsletter">
        <h2>{t('home.newsletterTitle')}</h2>
        <p>{t('home.newsletterDesc')}</p>
        <a
          href="https://form.qomon.org/ecoprod-newsletter-0/"
          target="_blank"
          rel="noopener noreferrer"
          className="home-newsletter-btn"
        >
          {t('home.newsletterCta')}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
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
