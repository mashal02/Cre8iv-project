import React from 'react';
import '../css/login.css';
export const Login = () => {
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
            <div className="LOGIN">login</div>
          </div>
          <div className="SIGNUP">signup</div>
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
};
export default Login;
