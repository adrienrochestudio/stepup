import { createContext, useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, isConfigured } from '../services/firebase';

export const AuthContext = createContext(null);

const MOCK_USER_KEY = 'stepup_mock_user';

// DEV ONLY: while Firebase is not configured, always start signed in as a
// cohort manager so the back-office is reachable without logging in.
// Remove this default (revert to `null`) once real auth is wired up.
const DEV_DEFAULT_USER = {
  uid: 'dev-cohort-manager',
  email: 'manager@stepup.dev',
  displayName: 'Cohort Manager',
  role: 'cohort_manager',
  organizationName: 'StepUP Demo',
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (!isConfigured) {
      try {
        const saved = localStorage.getItem(MOCK_USER_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed?.role === 'cohort_manager') return parsed;
        }
      } catch { /* ignore */ }
      localStorage.setItem(MOCK_USER_KEY, JSON.stringify(DEV_DEFAULT_USER));
      return DEV_DEFAULT_USER;
    }
    return null;
  });
  const [loading, setLoading] = useState(isConfigured);

  useEffect(() => {
    if (!isConfigured || !auth) {
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = useCallback(async (email, password, role = 'learner') => {
    if (isConfigured && auth) {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    }
    const mockUser = { uid: 'mock-uid', email, displayName: email.split('@')[0], role };
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  }, []);

  const signup = useCallback(async (email, password, role = 'learner', organizationName = '', extra = {}) => {
    if (isConfigured && auth) {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result.user;
    }
    const mockUser = { uid: 'mock-uid', email, displayName: extra.displayName || email.split('@')[0], role, organizationName, ...extra };
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  }, []);

  const logout = useCallback(async () => {
    if (isConfigured && auth) {
      await signOut(auth);
    }
    localStorage.removeItem(MOCK_USER_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
