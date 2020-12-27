import { createReducer } from '../../../helpers/methods';
import { setUserToken, removeUserToken } from '../../../services/api';

const initialState = {
  isLoadingLogin: false,
};

const loginSuccess = (state, { result }) => {
  setUserToken(result.data.data.token);
  return {
    ...state,
    isLoadingLogin: false,
  }
}

const logoutSuccess = (state, { result }) => {
  removeUserToken();
  return {
    ...state,
    isLoadingLogout: false,
  }
}

const authReducer = createReducer(initialState,
  {
    LOGIN_START: (state) => ({ ...state, isLoadingLogin: true }),
    LOGIN_SUCCESS: loginSuccess,
    LOGIN_FAIL: (state) => ({ ...state, isLoadingLogin: false }),

    LOGOUT_START: (state) => ({ ...state, isLoadingLogout: true }),
    LOGOUT_SUCCESS: logoutSuccess,
    LOGOUT_FAIL: (state) => ({ ...state, isLoadingLogout: false }),
  });

export default authReducer;