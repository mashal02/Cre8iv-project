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

  //console.log('Hello is this Function Ended Here??');
};

export const processFbLogin = async (code) => {
  try {
    let accesstoken;
    await fetchfbaccesstoken(code, (response) => {
      //console.log('Fb access token api response:', response.data);
      //accesstoken = response.data;
      //console.log('Accesstoken 1: ', accesstoken);
    });

    const fbPages = await fetchfbpages({
      callback: (response) => {
        console.log('Data from backend:', response.data.data);
      },
    });

    //const fbPages = await getUserFbPages(resp.data.access_token);
    //console.log('fbpages: ', fbPages);
    /* if (!fbPages.data.data || !fbPages.data.data || !fbPages.data.data.length) {
      showError('No Facebook page found.');
      return;
    } */

    await fetchfbpagesdata({
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

    /*     const actId = pageObj.actId;
    const alertUpdated = await addFbPageDetailsToAlert({
      alertId: alertId,
      userToken: resp.data.access_token,
      pageId: pageObj.id,
      pageName: pageObj.name,
      pageToken: pageObj.access_token,
      instaDetails: pageObj.instagram_business_account,
      accountId: actId,
    });
 */
    // await dialog.open(MessagePopupComponent, {
    //   width: '600px',
    //   data: `Your Facebook page "${pageObj.name}" has been connected.`,
    // });

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

//     /*     const actId = pageObj.actId;
//     const alertUpdated = await addFbPageDetailsToAlert({
//       alertId: alertId,
//       userToken: resp.data.access_token,
//       pageId: pageObj.id,
//       pageName: pageObj.name,
//       pageToken: pageObj.access_token,
//       instaDetails: pageObj.instagram_business_account,
//       accountId: actId,
//     });
//  */
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
