// React Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useDialog } from 'your-dialog-library'; // Import your dialog library
//import { MessagePopupComponent } from 'your-message-popup-library'; // Import your message popup library
//import SelectPagePopupComponent from 'your-select-page-popup-library'; // Import your select page popup library
import { getFacebookLoginUrl} from '../api/facebooklogin/index'; // Import your API service functions

const FacebookLoginComponent = () => {
  const [code, setCode] = useState('');
  
  const history = useNavigate();
 // const dialog = useDialog(); // Replace with your actual dialog hook

  const showError = (message) => {
    // Implement your error handling logic (e.g., show an error message)
    console.error('Error:', message);
  };

  const connectFacebook = async (alert) => {
    try {
      if (alert && alert.socialCare && alert.socialCare.facebook && alert.socialCare.facebook.pageId) {
        // Disconnect social account logic here
        // ...
      } else {
        const response = await getFacebookLoginUrl();
        localStorage.setItem('seletedAlertId', alert._id);
        window.location.href = response.url;
      }
    } catch (error) {
      showError(error);
    }
  };

  const processFbLogin = async () => {
    try {
      const resp = await getFbToken(code);
      const fbPages = await getUserFbPages(resp.data.access_token);

      if (!fbPages || !fbPages.data || !fbPages.data.length) {
        showError('No Facebook page found.');
        return;
      }

     /*  const pageObj = await dialog.open(SelectPagePopupComponent, {
        width: '600px',
        data: fbPages.data,
      }
      
      );
 */
      if (!pageObj) {
        showError('Connect to Facebook failed.');
        return;
      }

      const actId = pageObj.actId;
      const alertUpdated = await addFbPageDetailsToAlert({
        alertId: alertId,
        userToken: resp.data.access_token,
        pageId: pageObj.id,
        pageName: pageObj.name,
        pageToken: pageObj.access_token,
        instaDetails: pageObj.instagram_business_account,
        accountId: actId,
      });

      /* await dialog.open(MessagePopupComponent, {
        width: '600px',
        data: `Your Facebook page "${pageObj.name}" has been connected.`,
      });
 */
      localStorage.removeItem('seletedAlertId');
      history.push('/');
    } catch (error) {
      showError(error.error.message);
    }
  };

  // You can define the missing utility functions (e.g., disconnectSocialAccount, addFbPageDetailsToAlert) here.
   return connectFacebook;
 
  
  
};

export default FacebookLoginComponent;
