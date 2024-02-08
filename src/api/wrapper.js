/* eslint-disable no-unused-expressions */
/* eslint-disable object-shorthand */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import queryString from 'query-string';
//import getConfig from 'next/config';

//const { publicRuntimeConfig } = getConfig();

/**
 * @param {string} endpoint
 * @param {object} postData
 * @param {object} queryParams
 * @param {string} method
 * @returns makes an API request
 */

// TODO handle adding the AUTH header here instead of depending on the user to pass it everytime
export const apiWrapper = async ({
  endpoint,
  postData,
  headers,
  callback = () => undefined,
  queryParams = {},
  method = 'post',
}) => {
  try {
    const response = await axios({
      method,
      url: 'https://localhost:3001/${endpoint}',
      data: postData,
      params: queryParams,
      headers,
      paramsSerializer: function (params) {
        return queryString.stringify(params);
      },
    });
    if (response.status !== 200) {
        const error = new Error(`Api call to path '${endpoint}' failed with ${response.status}.`);  // Corrected error message template string
        error.response = response;
      throw error;
    }
    callback && callback(response);
    return response;
  } catch (error) {
    console.log('Error: ', error);
    callback && callback(error);
    return error;
  }
};