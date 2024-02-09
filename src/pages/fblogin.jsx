import React, { useEffect, useState } from 'react';

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

  const checkLoginState = () => {
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
        appId: '1303786660331996',
        cookie: true,
        xfbml: true,
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

  return (
    <div>
      {/* The JS SDK Login Button */}
      <div
        className="fb-login-button"
        data-config="810365901107808"
        data-onlogin="checkLoginState();"
      ></div>

      <div id="status">{status}</div>
    </div>
  );
};

export default FacebookLoginComponent;
