// React Component
import React, { useState } from 'react';
import {
  fetchfbaccesstoken,
  fetchfblogin,
  fetchfbpages,
  fetchfbpagesdata,
  fetchfbuserinfo,
} from '../api/facebooklogin/index'; // Import your API service functions

export const fetchData = async () => {
  try {
    await fetchfblogin({
      callback: (response) => {
        const authUrl = response.data.url;

        // Open the URL in a new tab
        window.open(authUrl, '_blank');
      },
    });
  } catch (error) {
    showError(error);
  }
};

export const processFbLogin = async () => {
  try {
    /* await fetchfbaccesstoken((response) => {
      console.log('this is my response =========', response);
      
    });
 */

    const fbPages = await fetchfbpages({
      callback: (response) => {
        console.log('Data from backend:', response);
      },
    });

    //console.log('fbpages: ', fbPages);
    if (!fbPages.data.data || !fbPages.data.data || !fbPages.data.data.length) {
      showError('No Facebook page found.');
      return;
    }

    await fetchfbuserinfo({});

    fetchfbpagesdata({
      callback: (response) => {
        console.log('Pages Data from backend:', response);
      },
    });
  } catch (error) {
    showError(error);
  }
};

const showError = (message) => {
  // Implement your error handling logic (e.g., show an error message)
  console.error('Error:', message);
};
