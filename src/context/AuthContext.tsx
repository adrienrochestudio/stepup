import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import { auth, isConfigured } from '../services/firebase';
import type { AppUser, AuthContextValue, Role } from '../types';

export const AuthContext = createContext<AuthContextValue | null>(null);

const MOCK_USER_KEY = 'stepup_mock_user';

// The single super-admin account. Any login with this email gets the
// 'admin' role and full access to the back-office (/admin). When real
// Firebase auth is wired up, enforce this with a custom claim instead.
export const ADMIN_EMAIL = 'adrienroche@ecoprod.com';

function roleForEmail(email: string | null | undefined, fallbackRole: Role = 'learner'): Role {
  return email?.trim().toLowerCase() === ADMIN_EMAIL ? 'admin' : fallbackRole;
}

function toAppUser(u: User): AppUser {
  return { uid: u.uid, email: u.email, displayName: u.displayName };
}

// DEV ONLY: while Firebase is not configured, always start signed in as the
// super-admin so the whole back-office is reachable without logging in.
// Remove this default (revert to `null`) once real auth is wired up.
const DEV_DEFAULT_USER: AppUser = {
  uid: 'dev-admin',
  email: ADMIN_EMAIL,
  displayName: 'Adrien Roche',
  role: 'admin',
  organizationName: 'Ecoprod',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(() => {
    if (!isConfigured) {
      try {
        const saved = localStorage.getItem(MOCK_USER_KEY);
        if (saved) {
          const parsed = JSON.parse(saved) as AppUser;
          if (parsed?.role === 'cohort_manager' || parsed?.role === 'admin') return parsed;
        }
      } catch {
        /* ignore */
      }
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
      setUser(firebaseUser ? toAppUser(firebaseUser) : null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = useCallback<AuthContextValue['login']>(async (email, password, role = 'learner') => {
    if (isConfigured && auth) {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return toAppUser(result.user);
    }
    const mockUser: AppUser = {
      uid: 'mock-uid',
      email,
      displayName: email.split('@')[0],
      role: roleForEmail(email, role),
    };
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  }, []);

  const signup = useCallback<AuthContextValue['signup']>(
    async (email, password, role = 'learner', organizationName = '', extra = {}) => {
      if (isConfigured && auth) {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return toAppUser(result.user);
      }
      const mockUser: AppUser = {
        uid: 'mock-uid',
        email,
        displayName: (extra.displayName as string) || email.split('@')[0],
        role: roleForEmail(email, role),
        organizationName,
        ...extra,
      };
      localStorage.setItem(MOCK_USER_KEY, JSON.stringify(mockUser));
      setUser(mockUser);
      return mockUser;
    },
    [],
  );

  const logout = useCallback<AuthContextValue['logout']>(async () => {
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
