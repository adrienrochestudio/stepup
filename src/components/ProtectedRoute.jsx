import { Navigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';



export default function ProtectedRoute({ requireRole }) {
  const { user, loading } = useAuth();
  const { t } = useTranslation();

  if (loading) return <p style={{ padding: '2rem', textAlign: 'center' }}>{t('common.loading')}</p>;
  if (!user) return <Navigate to="/login" replace />;
  if (requireRole) {
    const allowed = Array.isArray(requireRole) ? requireRole : [requireRole];
    if (!allowed.includes(user.role)) return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
