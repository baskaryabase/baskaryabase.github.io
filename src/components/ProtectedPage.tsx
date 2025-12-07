import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LoginForm } from './LoginForm';

interface ProtectedPageProps {
  children: React.ReactNode;
}

export const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }

  return (
    <div>
      <div style={{ 
        padding: '16px 20px', 
        backgroundColor: 'var(--ifm-color-success-lightest)',
        borderLeft: '4px solid var(--ifm-color-success)',
        marginBottom: '24px',
        borderRadius: '4px'
      }}>
        Welcome, <strong>{user?.username}</strong>! 👋
      </div>
      {children}
    </div>
  );
};
