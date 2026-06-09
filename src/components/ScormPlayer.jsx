import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScorm } from '../hooks/useScorm';
import './ScormPlayer.css';

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

  if (!scormUrl) {
    return (
      <div className="scorm-player">
        <div className="scorm-player-empty">
          <span className="scorm-player-empty-icon">&#128218;</span>
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
