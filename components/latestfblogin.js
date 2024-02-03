import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import getCurrentConfig from '../config';
//import { getFacebookLoginUrl, getFbToken, getUserFbPages } from '../../../../Server-Cre8iv/cert/latestfbloginserver'; // Import your API service functions
//import { getFacebookLoginUrl } from '../../../../Server-Cre8iv/cert/latestfbloginserver';
const FacebookLogin = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  
  const handleFacebookLogin = async () => {
    try {
      // Step 1: Get Facebook login URL
      console.log("Hello0");
      //const config = getCurrentConfig();
      //console.log(config.serviceUrl);
      const loginUrlResponse = await fetch('/api/getFacebookLoginUrl');

      //const loginUrlResponse = await fetch('${config.serviceUrl}api/getFacebookLoginUrl');

      //const loginUrlResponse = await fetch('${config.serviceUrl}api/getFacebookLoginUrl');
      const loginUrlData = await loginUrlResponse.json();
      window.location.href = loginUrlData.url; // Redirect the user to Facebook login

      // Note: You might want to handle this redirect on the server side in a real application
      // to keep the Facebook App Secret secure.

      // Step 2: After the user logs in on Facebook, they will be redirected back to your app
      // with a 'code' parameter in the URL. Extract the code from the URL and use it to get the access token.

      // Example: http://localhost:3000?code=<CODE_HERE>
      const urlParams = new URLSearchParams(window.location.search);
      const codeFromUrl = urlParams.get('code');

      if (codeFromUrl) {
        setCode(codeFromUrl);

        // Step 3: Exchange the code for a Facebook access token
        const tokenResponse = await fetch('/api/getFbToken', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: codeFromUrl }),
        });
        const tokenData = await tokenResponse.json();

        // Step 4: Get user's Facebook pages using the obtained access token
        const pagesResponse = await fetch('/api/getUserFbPages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_access_token: tokenData.data.access_token,
          }),
        });
        const pagesData = await pagesResponse.json();

        // Handle the obtained Facebook pages data as needed
        console.log('User Facebook Pages:', pagesData.data);

        // Redirect to the desired page after successful login
        navigate('/');
      }
    } catch (error) {
      console.error('Facebook login error:', error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <h1>Facebook Login Example</h1>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
};

export default FacebookLogin;
