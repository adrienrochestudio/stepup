import { useRef, useEffect } from 'react';
import { useScorm } from '../hooks/useScorm';
import './ScormPlayer.css';

export default function ScormPlayer({ courseId, scormUrl }) {
  const iframeRef = useRef(null);
  const { initializeApi, terminate } = useScorm(courseId);

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
          <h3>SCORM Package Not Configured</h3>
          <p>
            Upload your SCORM package to <code>public/scorm/{courseId}/</code> and
            update the course configuration to enable this player.
          </p>
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
