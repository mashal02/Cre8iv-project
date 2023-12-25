import React, { useState } from 'react';
import '../css/login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Add your login logic here
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Handle successful login
      console.log('Login successful');
    } else {
      // Handle login failure
      console.log('Login failed');
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
