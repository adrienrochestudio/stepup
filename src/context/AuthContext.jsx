import { createContext, useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, isConfigured } from '../services/firebase';

export const AuthContext = createContext(null);

const MOCK_USER_KEY = 'stepup_mock_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (!isConfigured) {
      try {
        const saved = localStorage.getItem(MOCK_USER_KEY);
        return saved ? JSON.parse(saved) : null;
      } catch { return null; }
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

  const login = useCallback(async (email, password) => {
    if (isConfigured && auth) {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    }
    // Mock mode — persist in localStorage
    const mockUser = { uid: 'mock-uid', email, displayName: email.split('@')[0] };
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  }, []);

  const signup = useCallback(async (email, password) => {
    if (isConfigured && auth) {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result.user;
    }
    // Mock mode — persist in localStorage
    const mockUser = { uid: 'mock-uid', email, displayName: email.split('@')[0] };
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
