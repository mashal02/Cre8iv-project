// React Component
import React, { useState } from 'react';
import {
  fetchfbaccesstoken,
  fetchfblogin,
  fetchfbpages,
  fetchfbpagesdata,
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

    fetchfbpagesdata({
      callback: (response) => {
        console.log('Pages Data from backend:', response);
      },
    });

    // const pageObj = await dialog.open(SelectPagePopupComponent, {
    //   width: '600px',
    //   data: fbPages.data,
    // });

    // if (!pageObj) {
    //   showError('Connect to Facebook failed.');
    //   return;
    // }

    //localStorage.removeItem('seletedAlertId');
    //history.push('/');
  } catch (error) {
    showError(error);
  }
};

const showError = (message) => {
  // Implement your error handling logic (e.g., show an error message)
  console.error('Error:', message);
};

// export const processFbpages = async (accesstoken) => {
//   try {
//     const fbPages = await fetchfbpages(accesstoken, (response) => {
//       console.log('Data from backend:', fbPages);
//     });

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

//     await dialog.open(MessagePopupComponent, {
//       width: '600px',
//       data: `Your Facebook page "${pageObj.name}" has been connected.`,
//     });

//     //localStorage.removeItem('seletedAlertId');
//     history.push('/');
//   } catch (error) {
//     showError(error.error.message);
//   }
// };
