import React from "react";
import "../css/login.css";
import { fetchData } from "../components/fblogin";

export const Login = () => {

  const handleClick = () => {
    fetchData();
    console.log('Div clicked!');
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
            <div className="LOGIN">login</div>
          </div>
          <div className="SIGNUP">signup</div>
        </div>
      </div>
      <div className="next-wrapper">
      <div onClick={handleClick} style={{ cursor: 'pointer' }} className="next">
        
          {/* <button className="text-wrapper" onClick={() => fetchData()}> */}
            Sign in with Instagram{" "}
          {/* </button> */}
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
