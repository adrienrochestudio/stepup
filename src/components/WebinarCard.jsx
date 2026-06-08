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
        <div className="webinar-card-play">&#9654;</div>
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
