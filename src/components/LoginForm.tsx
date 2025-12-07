import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useAuth } from '../context/AuthContext';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
  inline?: boolean; // if true, renders just the form (not modal wrapper)
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onClose, inline = false }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password');
      return;
    }

    if (login(username, password)) {
      setUsername('');
      setPassword('');
      onSuccess?.();
    } else {
      setError('Invalid credentials');
    }
  };

  const form = (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        
        <button type="submit" className={styles.submitBtn}>
          Login
        </button>
      </form>
    </div>
  );

  if (inline) return form;

  return ReactDOM.createPortal(
    <div 
      className={styles.loginModalOverlay} 
      style={{ background: 'rgba(0, 0, 0, 0.7)' }}
      onClick={onClose}
    >
      <div className={styles.loginModalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">✕</button>
        {form}
      </div>
    </div>,
    document.body
  );
};
