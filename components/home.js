// Home.js
import React from 'react';
//import { useNavigate } from 'react-router-dom';

function Home() {
  //const history = useNavigate();

  const authorizeWithFacebook = () => {
    // Replace these with your actual App ID and Redirect URI
    const appId = '1303786660331996';
    const redirectUri = 'https://localhost:3000/callback'; // Update with your actual localhost port

    // Define the OAuth authorization URL
    const authorizationUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${appId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=email&response_type=code&state=your_state`;

    // Redirect to the authorization URL
    window.location.href = authorizationUrl;
  };

  return (
    <div>
      <h1>Facebook OAuth Example</h1>
      <button onClick={authorizeWithFacebook}>Authorize with Facebook</button>
    </div>
  );
}

export default Home;
