import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 
const FacebookLoginComponent = () => {
  const [status, setStatus] = useState('');

  const statusChangeCallback = (response) => {
    console.log('statusChangeCallback');
    console.log(response);

    if (response.status === 'connected') {
      testAPI();
    } else {
      setStatus('Please log into this webpage.');
    }
  };

  //Check User Logging In Status 
  const checkLoginState = () => {
    console.log("InsideCheckLoginStatus Ftn");
    console.log(response);

    window.FB.getLoginStatus((response) => {
      statusChangeCallback(response);
    });
  };

  const testAPI = () => {
    console.log('Welcome! Fetching your information.... ');
    window.FB.api('/me', (response) => {
      console.log('Successful login for: ' + response.name);
      setStatus('Thanks for logging in, ' + response.name + '!');
    });
  };

  useEffect(() => {
   
    window.fbAsyncInit = function () {
      window.FB.init({
        //appId: '1303786660331996',
        appId: '1073961894040764',
        cookie: true,
        xfbml: true,
        //autoload: true,
        version: 'v18.0',
      });

      window.FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
      });
    };

    // Load the JS SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);
  
  const responseFacebook = (response) => {
    console.log(response);
    if (response.status === 'connected') {
      checkLoginState();
    }
  };
  return (
    <div>
      <div id="status"></div>
      <FacebookLogin
        //appId="1303786660331996"
        appId= "1073961894040764"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        render={renderProps => (
          <button onClick={renderProps.onClick}>Login with Facebook </button>
        )}
      />
    </div>
  );
};

export default FacebookLoginComponent;
