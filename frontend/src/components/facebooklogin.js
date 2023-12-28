// Import necessary libraries
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import '../css/login.css';

const FBLogin = () => {
    // Define your Facebook app ID
    const appId = '1303786660331996';

    // Handle Facebook login response
    const responseFacebook = async (response) => {
        console.log(response);

        // Send the Facebook access token to your server for authentication
        try {
            const res = await axios.post('http://localhost:5000/auth/facebook/token', {
                access_token: response.accessToken
            });

            // Handle the response from the server (you can customize this part)
            console.log('Server response:', res.data);
        } catch (error) {
            console.error('Error while authenticating with Facebook:', error.response.data);
        }
    };

    return (
        <div className="login-container">
            <h2>Login with Facebook</h2>
            <div className="login-form">
                <FacebookLogin
                    appId={appId}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    icon="fa-facebook"
                />
            </div>
        </div>
    );
};

export default FBLogin;
