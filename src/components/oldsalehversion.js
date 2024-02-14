// React Component
import React, { useState } from 'react';
import { fetchfbaccesstoken, fetchfblogin } from '../api/facebooklogin/index'; // Import your API service functions

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

  console.log('Hello is this Function Ended Here??');
};

export const processFbLogin = async (code) => {
  try {
    console.log('Code: ', code);
    await fetchfbaccesstoken(code, {
      callback: (response) => {
        console.log('Response from backend: ', response);
        console.log('Fb access token api response:', response.data);
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

// const processFbpages = async () => {
//   try {
//     const fbPages = await fetchfbpages({
//       callback: () => {
//         console.log('Data from backend:');
//       },
//     });

//     //const fbPages = await getUserFbPages(resp.data.access_token);

//     if (!fbPages || !fbPages.data || !fbPages.data.length) {
//       showError('No Facebook page found.');
//       return;
//     }

//     const pageObj = await dialog.open(SelectPagePopupComponent, {
//       width: '600px',
//       data: fbPages.data,
//     });

//     if (!pageObj) {
//       showError('Connect to Facebook failed.');
//       return;
//     }

//     const actId = pageObj.actId;
//     const alertUpdated = await addFbPageDetailsToAlert({
//       alertId: alertId,
//       userToken: resp.data.access_token,
//       pageId: pageObj.id,
//       pageName: pageObj.name,
//       pageToken: pageObj.access_token,
//       instaDetails: pageObj.instagram_business_account,
//       accountId: actId,
//     });

//     await dialog.open(MessagePopupComponent, {
//       width: '600px',
//       data: `Your Facebook page "${pageObj.name}" has been connected.`,
//     });

//     localStorage.removeItem('seletedAlertId');
//     history.push('/');
//   } catch (error) {
//     showError(error.error.message);
//   }
// };
