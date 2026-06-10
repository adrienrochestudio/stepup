import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScorm } from '../hooks/useScorm';
import './ScormPlayer.css';

// Les vrais packages SCORM ne sont pas embarqués dans la démo (fichiers trop
// lourds). Tant que ce drapeau est à true, le lecteur affiche un message à la
// place de l'iframe. Repassez-le à false une fois les packages réels déposés.
const SCORM_DEMO_MODE = true;

export default function ScormPlayer({ courseId, scormUrl, lang }) {
  const iframeRef = useRef(null);
  const { initializeApi, terminate } = useScorm(courseId, lang);
  const { t } = useTranslation();

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !scormUrl) return;

    const handleLoad = () => {
      try {
        initializeApi(iframe.contentWindow);
      } catch {
        // Cross-origin content
      }
    };

    iframe.addEventListener('load', handleLoad);
    return () => {
      iframe.removeEventListener('load', handleLoad);
      terminate();
    };
  }, [scormUrl, initializeApi, terminate]);

  if (SCORM_DEMO_MODE) {
    return (
      <div className="scorm-player">
        <div className="scorm-player-demo">
          <span className="scorm-player-demo-icon" aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="m10 8 6 4-6 4V8z" />
            </svg>
          </span>
          <p className="scorm-player-demo-text">{t('course.demoNotice')}</p>
        </div>
      </div>
    );
  }

  if (!scormUrl) {
    return (
      <div className="scorm-player">
        <div className="scorm-player-empty">
          <span className="scorm-player-empty-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </span>
          <h3>{t('course.notConfigured')}</h3>
          <p>{t('course.notConfiguredDesc', { courseId })}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="scorm-player">
      <iframe
        ref={iframeRef}
        className="scorm-player-frame"
        src={scormUrl}
        title="SCORM Course Player"
        allow="fullscreen"
      />
    </div>
  );
}
