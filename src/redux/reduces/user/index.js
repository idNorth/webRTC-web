import { createReducer } from '../../../helpers/methods';
import { setUserToken, removeUserToken } from '../../../services/api';

const initialState = {
  users: [],
  total: null,
  isLoadingGetUsers: false,
};

const getUsersSuccess = (state, { result }) => {
  return {
    ...state,
    users: result.data.data.users,
    total: result.data.data.total,
    isLoadingGetUsers: false,
  }
}

const userReducer = createReducer(initialState,
  {
    GET_USERS_START: (state) => ({ ...state, isLoadingGetUsers: true }),
    GET_USERS_SUCCESS: getUsersSuccess,
    GET_USERS_FAIL: (state) => ({ ...state, isLoadingGetUsers: false }),
  });

export default userReducer;