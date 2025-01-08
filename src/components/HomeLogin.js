import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HomeLogin.css'; // Style for the login form
import userIcon from '../assets/user.svg'; // User icon
import lockIcon from '../assets/lock.png'; // Lock icon
import aadhar from '../assets/aadhar.png'; // Aadhaar image

function HomeLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Error state
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Validate credentials
  const validateForm = () => {
    if (username.trim().length < 3) {
      setError('Username must be at least 3 characters.');
      return false;
    }
    if (password.trim().length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Pass username as state for dynamic greeting on next page
      navigate('/Page', { state: { username } });
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        {/* Aadhaar logo */}
        <div className="aadhar">
          <img src={aadhar} alt="Aadhar" className="aadhar-image" />
        </div>

        <h1 className="login-title">Login</h1>

        {/* Username field */}
        <div className="user">
          <img src={userIcon} alt="User icon" className="user-icon" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Username"
            required
          />
        </div>

        {/* Password field */}
        <div className="lock">
          <img src={lockIcon} alt="Lock icon" className="lock-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Login button */}
        <button
          type="submit"
          className="login-button"
          disabled={!username || !password} // Disable when fields are empty
        >
          Login
        </button>

        {/* Links */}
        <p className="link">
          <a href="/forgot-password">Forgot password?</a> Or <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default HomeLogin;
