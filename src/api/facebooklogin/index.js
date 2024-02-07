import React, { useState } from 'react';
import axios from 'axios';

const getFacebookLoginUrl = async () => {
    try {
      const response = await axios.get(
        'https://localhost:3001/',
      );
      return response.data;
      
    } 
    
    catch (error) {
      console.error('Error sending message:', error);
      return error;
    }

    
  };

  export default getFacebookLoginUrl;
