import React, { createContext, useContext, useState, useEffect } from 'react';
import { PROTECTED_CONFIG } from '../protected-config';

interface AuthContextType {
  isLoggedIn: boolean;
  user: { username: string } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // Sync body class with login state
  useEffect(() => {
    try {
      if (isLoggedIn) {
        document.body.classList.add('is-logged-in');
      } else {
        document.body.classList.remove('is-logged-in');
      }
    } catch (e) {
      // server-side rendering safety: document may be undefined
    }
  }, [isLoggedIn]);

  const login = (username: string, password: string): boolean => {
    // Validate against static config credentials
    if (username === PROTECTED_CONFIG.username && password === PROTECTED_CONFIG.password) {
      const userData = { username };
      setUser(userData);
      setIsLoggedIn(true);
      localStorage.setItem('authUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
