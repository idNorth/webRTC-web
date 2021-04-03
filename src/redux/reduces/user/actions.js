import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from './types';

export const getUsersAction = () => ({
  types: [GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_FAIL],
  promise: (api) => api.get('/user/getUsers'),
});
