import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { isConfigured } from '../services/firebase';
import './Login.css';

export default function Login() {
  const { user, login, signup } = useAuth();
  const navigate = useNavigate();
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
        <h1>{isSignup ? 'Create Account' : 'Welcome Back'}</h1>
        <p className="login-subtitle">
          {isSignup ? 'Sign up to access your courses' : 'Log in to your learning dashboard'}
        </p>

        {!isConfigured && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="login-mock-badge">Dev Mode — Any credentials work</span>
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              required
              minLength={6}
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-submit" disabled={submitting}>
            {submitting ? 'Please wait...' : isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <div className="login-toggle">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={() => { setIsSignup(!isSignup); setError(''); }}>
            {isSignup ? 'Log In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}
