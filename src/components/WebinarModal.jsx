import { useEffect } from 'react';
import './WebinarModal.css';

export default function WebinarModal({ webinar, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!webinar) return null;

  const formattedDate = new Date(webinar.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="webinar-modal-overlay" onClick={onClose}>
      <div className="webinar-modal" onClick={(e) => e.stopPropagation()}>
        <div className="webinar-modal-header">
          <h2>{webinar.title}</h2>
          <button className="webinar-modal-close" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>

        <div className="webinar-modal-video">
          {webinar.embedUrl ? (
            <iframe
              src={webinar.embedUrl}
              title={webinar.title}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <span>Video embed URL not configured</span>
          )}
        </div>

        <div className="webinar-modal-info">
          <p>{webinar.description}</p>
          <div className="webinar-modal-meta">
            <span>{formattedDate}</span>
            <span>{webinar.speaker}</span>
            <span>{webinar.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
