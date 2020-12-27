import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './types';

export const loginAction = (data) => ({
  types: [LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL],
  promise: (api) => api.post('/auth/login', data),
});

export const logoutAction = () => ({
  types: [LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAIL],
  promise: (api) => api.get('/auth/logout'),
});
