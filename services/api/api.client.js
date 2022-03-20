import axios from 'axios';
import { Alert } from 'react-native';

import config from 'resources/config';
import { STORAGE_KEYS } from 'helpers/constants';
import { getItem } from 'helpers/storage';

import ApiError from './api.error';

const serverError = 'Server returned an error. Please, contact the support team.';
const connectionError = 'Connection error. Please, check your Internet connection.';
const authError = 'Sorry, but you are not authorized';

const httpRequest = (method) => async (url, data) => {
  let urlWithSlash = url;
  let accessToken = await getItem(STORAGE_KEYS.ACCESS_TOKEN);

  if (urlWithSlash[0] !== '/') {
    urlWithSlash = `/${urlWithSlash}`;
  }

  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method,
    url: `${config.apiUrl}${urlWithSlash}`,
  };

  if (data) {
    if (data.blob) {
      options.responseType = 'blob';
    }
    if (method === 'get') {
      options.params = data;
    } else {
      options.data = data;
    }
  }

  try {
    const { data } = await axios(options);
    return data;
  } catch (err) {
    if (err.response) {
      if (err.response.status === 500) {
        Alert.alert('', serverError);
      }
      if (err.response.status === 401) {
        Alert.alert('', authError);
      }
      throw new ApiError(err.response.data, err.response.status);
    } else if (err.request) {
      Alert.alert('', connectionError);
      throw new ApiError({ errors: [] }, 500);
    } else {
      Alert.alert('', serverError);
      throw new ApiError({ errors: [] }, 500);
    }
  }
};

export const getRequest = httpRequest('get');
export const postRequest = httpRequest('post');
export const putRequest = httpRequest('put');
export const deleteRequest = httpRequest('delete');

const apiClient = {
  get: getRequest,
  post: postRequest,
  put: putRequest,
  delete: deleteRequest,
};

export default apiClient;
