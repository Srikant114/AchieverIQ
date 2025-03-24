import axios from 'axios';
import { apiUrl, apiSecret, getToken } from '../constants/defaultValues';

export const callApi = async ({ method, url, data, headers = {} }) => {
  try {
    // Merge the apiSecret into the request data
    const requestData = { ...data, api_key: apiSecret };

    // Get the token (if available) to include in the headers
    const token = await getToken();

    const config = {
      method,
      url: `${apiUrl}${url}`, // Concatenate the default apiUrl with the endpoint
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        'Access-Control-Allow-Origin': '*',
        ...headers,
      },
      data: requestData,
    };

    const response = await axios(config);

    // Check for an authentication failure flag in the response
    if (response?.data?.authFailed) {
      localStorage.removeItem('data');
      // Optionally, redirect to login page, e.g., window.location.href = '/login'
    }

    return response;
  } catch (error) {
    throw error;
  }
};
