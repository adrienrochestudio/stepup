import './WebinarCard.css';

export default function WebinarCard({ webinar, onClick }) {
  const formattedDate = new Date(webinar.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="webinar-card" onClick={() => onClick(webinar)}>
      <div className="webinar-card-thumb">
        {webinar.thumbnail && (
          <img
            src={webinar.thumbnail}
            alt=""
            className="webinar-card-thumb-img"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        )}
        <div className="webinar-card-play" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="webinar-card-duration">{webinar.duration}</span>
      </div>
      <div className="webinar-card-body">
        <h3>{webinar.title}</h3>
        <div className="webinar-card-meta">
          <span>{formattedDate}</span>
          <span>{webinar.speaker}</span>
        </div>
        <p>{webinar.description}</p>
      </div>
    </article>
  );
}
