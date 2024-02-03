import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Callback() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
    const appId = '1303786660331996';
    const appSecret = '3d3274e3174916feafaee66fd84d4e95';

    const tokenUrl = `https://graph.facebook.com/v12.0/oauth/access_token?client_id=${appId}&client_secret=${appSecret}&redirect_uri=http://localhost:3000/callback&code=${code}`;

    fetch(tokenUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the response and store the access token securely

        // For this example, simply redirect back to the home page
        navigate('/');
      })
      .catch((error) => {
        console.error('Error exchanging code for access token:', error);
        // Handle the error, e.g., redirect to an error page
      });
  }, [location, navigate]);

  return (
    <div>
      <p>Callback Page - Processing...</p>
    </div>
  );
}

export default Callback;
