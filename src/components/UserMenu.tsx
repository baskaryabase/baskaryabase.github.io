import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './UserMenu.module.css';

export const UserMenu: React.FC = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className={styles.userMenu}>
      <button 
        className={styles.userButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User menu"
      >
        👤 {user?.username}
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          <button 
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className={styles.logoutBtn}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
