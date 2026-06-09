import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { isConfigured } from '../services/firebase';
import { countryData } from '../data/countryData';
import './Login.css';

const COUNTRY_OPTIONS = [
  ...new Set(Object.values(countryData).map((c) => c.name)),
].sort((a, b) => a.localeCompare(b));

export default function Login() {
  const { user, login, signup } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isSignup, setIsSignup] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [company, setCompany] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Learners never choose a role. Cohort managers are provisioned via the
  // back-office; in dev mode they can be simulated with ?role=cohort_manager.
  const params = new URLSearchParams(window.location.search);
  const role =
    !isConfigured && params.get('role') === 'cohort_manager'
      ? 'cohort_manager'
      : 'learner';
  const isManagerSignup = role === 'cohort_manager';

  if (user) return <Navigate to="/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      if (isSignup) {
        const displayName = `${firstName} ${lastName}`;
        await signup(email, password, role, organizationName, { firstName, lastName, displayName, country, company });
      } else {
        await login(email, password, role);
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
          {isSignup && (
            <>
              <div className="login-field-row">
                <div className="login-field">
                  <label htmlFor="firstName">{t('login.firstName')}</label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={t('login.firstNamePlaceholder')}
                    required
                  />
                </div>
                <div className="login-field">
                  <label htmlFor="lastName">{t('login.lastName')}</label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={t('login.lastNamePlaceholder')}
                    required
                  />
                </div>
              </div>
            </>
          )}

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

          {isSignup && (
            <>
              <div className="login-field">
                <label htmlFor="country">{t('login.country')}</label>
                <select
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    {t('login.countryPlaceholder')}
                  </option>
                  {COUNTRY_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="login-field">
                <label htmlFor="company">{t('login.company')}</label>
                <input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={t('login.companyPlaceholder')}
                />
              </div>
            </>
          )}

          {isSignup && isManagerSignup && (
            <div className="login-field">
              <label htmlFor="organizationName">{t('login.organizationName')}</label>
              <input
                id="organizationName"
                type="text"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                placeholder={t('login.organizationNamePlaceholder')}
                required
              />
            </div>
          )}

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
