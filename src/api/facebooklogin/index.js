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

  export const fetchfbuserinfo = ({ callback }) =>
  apiWrapper({
    endpoint: `fbuserinfo`,
    method: 'get',
    callback,
  });
