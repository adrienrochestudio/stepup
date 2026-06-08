import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd', display: 'flex', gap: '1rem' }}>
        <Link to="/">StepUP</Link>
        <Link to="/resources/map">Map</Link>
        <Link to="/resources/webinars">Webinars</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}
