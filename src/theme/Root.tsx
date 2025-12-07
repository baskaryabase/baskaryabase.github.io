import React, { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { LoginForm } from '../components/LoginForm';
import { useLocation } from '@docusaurus/router';

const ProtectedRouteGuard = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Check if current route is protected
  useEffect(() => {
    const isProtectedRoute = location.pathname.startsWith('/protected');
    if (isProtectedRoute && !isLoggedIn) {
      setShowLoginModal(true);
    } else {
      setShowLoginModal(false);
    }
  }, [location.pathname, isLoggedIn]);

  // Show login modal for protected routes when not logged in
  if (showLoginModal) {
    return <LoginForm onClose={() => {}} />;
  }

  return <>{children}</>;
};

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ProtectedRouteGuard>
        {children}
      </ProtectedRouteGuard>
    </AuthProvider>
  );
};

export default Root;
