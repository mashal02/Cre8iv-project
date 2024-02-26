import { apiWrapper } from '../../api/wrapper';

export const fetchfblogin = ({ callback }) =>
  apiWrapper({
    endpoint: 'fblogin',
    method: 'get',
    callback,
  });

// export const fetchfbaccesstoken = (code, callback) =>
//   apiWrapper({
//     endpoint: `fbtoken?code=${code}`,
//     method: 'get',
//     callback,
//   });
/*  export const fetchfbaccesstoken = ({callback}) =>
  apiWrapper({
    endpoint: `fbtoken`,
    method: 'get',
    callback,
  }); */
export const fetchfbpages = ({ callback }) =>
  apiWrapper({
    //data: accesstoken,
    //key: accesstoken,
    endpoint: `fbpages`,
    method: 'get',
    callback,
    //postData[accesstoken] = token,
    // headers: {
    //   Authorization: `Bearer ${accessToken}`,
    // },
    /*     postData: {
      user_access_token: accessToken,
    },
 */
  });

export const fetchfbpagesdata = ({ callback }) =>
  apiWrapper({
    endpoint: `fbpagesdata`,
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
