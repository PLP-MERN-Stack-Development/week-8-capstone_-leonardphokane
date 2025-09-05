// client/src/components/Login/LoginForm.jsx

import React, { useState } from 'react';
import { loginUser } from '../../api/auth';
import styles from './Login.module.css'; // optional CSS module

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await loginUser(formData);
      localStorage.setItem('token', response.token);
      setSuccessMsg('Login successful!');
      // Optional: redirect or trigger auth context
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      {successMsg && <p className={styles.success}>{successMsg}</p>}
    </form>
  );
};

export default LoginForm;