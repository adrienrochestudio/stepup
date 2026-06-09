import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-content">
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
            <h4>{t('footer.aboutUs')}</h4>
            <ul>
              <li><Link to="/about/eurimages-ecoprod">{t('nav.aboutEurimagesEcoprod')}</Link></li>
              <li><Link to="/about/partners">{t('nav.aboutPartners')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.legal')}</h4>
            <ul>
              <li><Link to="/terms">{t('footer.terms')}</Link></li>
              <li><Link to="/privacy">{t('footer.privacy')}</Link></li>
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
