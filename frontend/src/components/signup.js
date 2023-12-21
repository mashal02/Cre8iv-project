import React from 'react';
import '../css/signup.css';

export default function Signup() {
  return (
    <div className="signup-page">
      <img
        className="vector"
        alt="Vector"
        src="https://c.animaapp.com/ydRguq2U/img/vector.svg"
      />
      <div className="frame">
        <div className="div">
          <div className="signup-wrapper">
            <div className="signup">signup</div>
          </div>
          <div className="text-wrapper">login</div>
        </div>
      </div>
      <div className="next-wrapper">
        <div className="next">
          <div className="text-wrapper-2">Sign up with Instagram</div>
          <img
            className="eva-arrow-ios"
            alt="Eva arrow ios"
            src="https://c.animaapp.com/ydRguq2U/img/eva-arrow-ios-forward-outline.svg"
          />
        </div>
      </div>
    </div>
  );
}
