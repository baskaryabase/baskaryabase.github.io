import React from 'react';
import Navbar from '@docusaurus/theme-classic/lib/theme/Navbar';
import { useAuth } from '../context/AuthContext';
import { UserMenu } from '../components/UserMenu';
import { LoginForm } from '../components/LoginForm';

export default function CustomNavbar(props) {
  const { isLoggedIn } = useAuth();
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <>
      <Navbar {...props} />
      <div style={{ position: 'absolute', top: 8, right: 12, padding: '8px 12px', zIndex: 10001 }}>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <button
            style={{
              background: 'var(--ifm-color-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: '14px',
              boxShadow: '0 4px 12px rgba(2,6,23,0.12)',
            }}
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        )}
      </div>
      {showLogin && !isLoggedIn && (
        <LoginForm onSuccess={() => setShowLogin(false)} onClose={() => setShowLogin(false)} />
      )}
    </>
  );
}
