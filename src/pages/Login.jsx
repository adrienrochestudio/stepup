import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { isConfigured } from '../services/firebase';
import './Login.css';

export default function Login() {
  const { user, login, signup } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (user) return <Navigate to="/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      if (isSignup) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Authentication failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>{isSignup ? t('login.titleSignup') : t('login.titleLogin')}</h1>
        <p className="login-subtitle">
          {isSignup ? t('login.subtitleSignup') : t('login.subtitleLogin')}
        </p>

        {!isConfigured && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="login-mock-badge">{t('login.devMode')}</span>
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="email">{t('login.email')}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">{t('login.password')}</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-submit" disabled={submitting}>
            {submitting ? t('login.submitting') : isSignup ? t('login.submitSignup') : t('login.submit')}
          </button>
        </form>

        <div className="login-toggle">
          {isSignup ? t('login.toggleToLogin') : t('login.toggleToSignup')}{' '}
          <button onClick={() => { setIsSignup(!isSignup); setError(''); }}>
            {isSignup ? t('login.logIn') : t('login.signUp')}
          </button>
        </div>
      </div>
    </div>
  );
}
