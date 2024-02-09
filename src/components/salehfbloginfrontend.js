// React Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
//import { useDialog } from 'your-dialog-library'; // Import your dialog library
//import { MessagePopupComponent } from 'your-message-popup-library'; // Import your message popup library
//import SelectPagePopupComponent from 'your-select-page-popup-library'; // Import your select page popup library
//import { fetchfblogin} from '../api/facebooklogin/index'; // Import your API service functions
//import { fetchDataFromBackend } from 'yourBackendApi'; // Replace with your actual backend API function
import axios from 'axios';

function connectFacebook() {
  const [code, setCode] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:3001/fblogin');
        console.log('UseEffect Hook Called ~ res', response.data);
        // Add your logic here based on the response
      } catch (error) {
        showError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount
}
// Other logic for ConnectFacebook component

// Example of using history.push for navigation
// history.push("/your-route");

const showError = (error) => {
  // Handle and display the error
  console.error('Error:', error);
};

/*   const processFbLogin = async () => {
    try {
      const resp = await getFbToken(code);
      const fbPages = await getUserFbPages(resp.data.access_token);

      if (!fbPages || !fbPages.data || !fbPages.data.length) {
        showError('No Facebook page found.');
        return;
      }

      const pageObj = await dialog.open(SelectPagePopupComponent, {
        width: '600px',
        data: fbPages.data,
      }
      
      );

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

      await dialog.open(MessagePopupComponent, {
        width: '600px',
        data: `Your Facebook page "${pageObj.name}" has been connected.`,
      });

      localStorage.removeItem('seletedAlertId');
      history.push('/');
    } catch (error) {
      showError(error.error.message);
    }
  };

 */ // You can define the missing utility functions (e.g., disconnectSocialAccount, addFbPageDetailsToAlert) here.

export default connectFacebook;
