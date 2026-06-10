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
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="StepUP"
              className="footer-logo"
            />
            <p>{t('home.partnersIntro')}</p>
          </div>

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
              <li>
                <a href="https://www.coe.int/en/web/eurimages" target="_blank" rel="noopener noreferrer">
                  Eurimages
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><a href="mailto:stepup@ecoprod.com">stepup@ecoprod.com</a></li>
            </ul>
          </div>
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
