// React Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
//import { useDialog } from 'your-dialog-library'; // Import your dialog library
//import { MessagePopupComponent } from 'your-message-popup-library'; // Import your message popup library
//import SelectPagePopupComponent from 'your-select-page-popup-library'; // Import your select page popup library
import { fetchfbaccesstoken, fetchfblogin } from '../api/facebooklogin/index'; // Import your API service functions

const FacebookLoginComponent = () => {
  const [code, setCode] = useState('');
  const history = useNavigate();
  const [codeStatus, setCodeStatus] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetchfblogin({
        callback: (mainDataObj) => {
          console.log('Data from backend:', mainDataObj);

          // Access authUrl from data (assuming the backend sends it in the response)
          const authUrl = mainDataObj.data.url;
          console.log('Authentication URL:', authUrl);

          const codeStatus = mainDataObj.status;
          setCodeStatus(codeStatus);
          console.log('Code Status:', codeStatus);

          // Open the URL in a new tab
          window.open(authUrl, '_blank');
         
          // Your logic with the authUrl goes here
        },
      });
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }

    console.log("Hello is this Function Ended Here??");
  };

  // useEffect(() => {
  //   // Call the fetchData function when the component mounts
  //   fetchData();
  // }, []); // Empty dependencies array means it runs once after the initial render

  const showError = (message) => {
    // Implement your error handling logic (e.g., show an error message)
    console.error('Error:', message);
  };

  const processFbLogin = async () => {
    try {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code');
      const response = await fetchfbaccesstoken({
        callback: (fbRes1) => {
          console.log('Data from Process Fb Login (Code):', fbRes1);

          // Access code from data (assuming the backend sends it in the response)
          //const code = fbRes1.data.code;
          console.log('Request Body Code:', code);

          //return code;
        },
      });
    } catch (error) {
      showError(error);
    }
  };

  const connectFacebook = async () => {
    try {
      // Call fetchData when connecting Facebook
      await fetchData();

      //Status Wali Cheez Dekhni hai Humnay
       //Also Check Await & Aysync
       //Use Effect wali Hook ko Explore Krna hai
      if (codeStatus == '200') {
        console.log("Hello are you Here in this IF Statement ");
         await processFbLogin();
      }
      else{
        console.log("Hello are you Here in this ELSE Statement");
      }
      //localStorage.setItem('seletedAlertId', alert._id);
      // window.location.href = response.url;
    } catch (error) {
      showError(error);
    }
  };

  //const resp = await getFbToken(code);

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

  // You can define the missing utility functions (e.g., disconnectSocialAccount, addFbPageDetailsToAlert) here.
  return connectFacebook;
};

export default FacebookLoginComponent;
