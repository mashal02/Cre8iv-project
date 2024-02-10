import React, { useState } from 'react';
import axios from 'axios';
import { apiWrapper } from '../../api/wrapper';

export const fetchfblogin = ({ callback }) =>
  apiWrapper({
    endpoint: 'fblogin',
    method: 'get',
    callback,
  });

export const fetchfbaccesstoken = ({ callback }) =>
  apiWrapper({
    endpoint: 'fbtoken',
    method: 'get',
    callback,
  });

export const fetchfbpages = ({ callback }) =>
  apiWrapper({
    endpoint: 'fbpages',
    method: 'get',
    callback,
  });

/* const getFacebookLoginUrl = async () => {
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

    
  }; */
