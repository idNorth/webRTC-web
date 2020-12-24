import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './types';

export const loginAction = (data) => ({
  types: [LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL],
  promise: (api) => api.post('/auth/signIn', data),
});
