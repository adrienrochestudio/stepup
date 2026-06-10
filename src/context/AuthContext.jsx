import { createContext, useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, isConfigured } from '../services/firebase';

export const AuthContext = createContext(null);

const MOCK_USER_KEY = 'stepup_mock_user';

// The single super-admin account. Any login with this email gets the
// 'admin' role and full access to the back-office (/admin). When real
// Firebase auth is wired up, enforce this with a custom claim instead.
export const ADMIN_EMAIL = 'adrienroche@ecoprod.com';

function roleForEmail(email, fallbackRole = 'learner') {
  return email?.trim().toLowerCase() === ADMIN_EMAIL ? 'admin' : fallbackRole;
}

// DEV ONLY: while Firebase is not configured, always start signed in as the
// super-admin so the whole back-office is reachable without logging in.
// Remove this default (revert to `null`) once real auth is wired up.
const DEV_DEFAULT_USER = {
  uid: 'dev-admin',
  email: ADMIN_EMAIL,
  displayName: 'Adrien Roche',
  role: 'admin',
  organizationName: 'Ecoprod',
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (!isConfigured) {
      try {
        const saved = localStorage.getItem(MOCK_USER_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed?.role === 'cohort_manager' || parsed?.role === 'admin') return parsed;
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
    const mockUser = { uid: 'mock-uid', email, displayName: email.split('@')[0], role: roleForEmail(email, role) };
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  }, []);

  const signup = useCallback(async (email, password, role = 'learner', organizationName = '', extra = {}) => {
    if (isConfigured && auth) {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result.user;
    }
    const mockUser = { uid: 'mock-uid', email, displayName: extra.displayName || email.split('@')[0], role: roleForEmail(email, role), organizationName, ...extra };
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
