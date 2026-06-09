import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function getEcoprodUrl(lang) {
  return lang === 'fr' ? 'https://ecoprod.com' : 'https://ecoprod.com/en/';
}

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || 'fr';

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-org">
            <h4>Ecoprod</h4>
            <p>{t('footer.ecoprodDesc')}</p>
            <a
              href={getEcoprodUrl(currentLang)}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-org-link"
            >
              {t('footer.visitWebsite')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
          <div className="footer-org">
            <h4>Eurimages</h4>
            <p>{t('footer.eurimagesDesc')}</p>
            <a
              href="https://www.coe.int/en/web/eurimages"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-org-link"
            >
              {t('footer.visitWebsite')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>{t('footer.resources')}</h4>
            <ul>
              <li><Link to="/resources/map">{t('nav.map')}</Link></li>
              <li><Link to="/resources/webinars">{t('nav.webinars')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.learning')}</h4>
            <ul>
              <li><Link to="/dashboard">{t('nav.dashboard')}</Link></li>
              <li><Link to="/login">{t('nav.login')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.partners')}</h4>
            <ul>
              <li><Link to="/about/partners">{t('nav.partners')}</Link></li>
              <li>
                <a href={getEcoprodUrl(currentLang)} target="_blank" rel="noopener noreferrer">
                  Ecoprod
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.legal')}</h4>
            <ul>
              <li><Link to="/terms">{t('footer.terms')}</Link></li>
              <li><Link to="/privacy">{t('footer.privacy')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><a href="mailto:stepup@ecoprod.com">stepup@ecoprod.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-initiative">
          <p>{t('about.initiativeBanner')}</p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t('footer.copyright')}</p>
          <div className="footer-bottom-links">
            <Link to="/terms">{t('footer.terms')}</Link>
            <span className="footer-sep">|</span>
            <Link to="/privacy">{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
