import React, { useState } from 'react';
import '../css/login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login
        setLoginStatus('Login successful');
        console.log('Login successful');
      } else {
        // Handle login failure
        setLoginStatus(`Login failed: ${data.message}`);
        console.log('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginStatus('Internal Server Error');
    }
  };

  return (
    <div className="login-page">
      <img
        className="vector"
        alt="Vector"
        src="https://c.animaapp.com/S9HX62V6/img/vector.svg"
      />
      <div className="frame">
        <div className="div">
          <div className="LOGIN-wrapper">
            <div className="LOGIN">Login</div>
          </div>
          {/* Adding the login form */}
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
          {/* Display login status */}
          {loginStatus && <p>{loginStatus}</p>}
        </div>
      </div>
      <div className="next-wrapper">
        <div className="next">
          <div className="text-wrapper">Sign in with Instagram</div>
          <img
            className="eva-arrow-ios"
            alt="Eva arrow ios"
            src="https://c.animaapp.com/S9HX62V6/img/eva-arrow-ios-forward-outline.svg"
          />
        </div>
      </div>
    </div>
  );
}
