import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <p style={{ padding: '2rem', textAlign: 'center' }}>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
