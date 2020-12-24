import axios from 'axios'
import config from '../config'

const instance = axios.create({
  baseURL: config.api.url,
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  },
  timeout: 60000,
});

export const setUserToken = async (token) => {
  try {
    instance.defaults.headers.common['authorization'] = token;
    await localStorage.setItem('UserToken', token);
  } catch (error) {
    throw(error);
  }
}

export const removeUserToken = async () => {
  try {
    delete instance.defaults.headers.common['authorization'];
    await localStorage.removeItem('UserToken');
  } catch (error) {
    throw(error);
  }
};

export default instance