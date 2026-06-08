import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <section className="home-hero">
      <h1>Welcome to StepUP</h1>
      <p>
        Explore global resources on an interactive map and access our
        curated webinar library — all in one place.
      </p>
      <div className="home-cta">
        <Link to="/resources/map" className="cta-primary">
          Explore the Map
        </Link>
        <Link to="/resources/webinars" className="cta-secondary">
          Watch Webinars
        </Link>
      </div>
    </section>
  );
}
