import { createReducer } from '../../../helpers/methods';
import { setUserToken } from '../../../services/api';

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

const authReducer = createReducer(initialState,
  {
    LOGIN_START: (state) => ({ ...state, isLoadingLogin: true }),
    LOGIN_SUCCESS: loginSuccess,
    LOGIN_FAIL: (state) => ({ ...state, isLoadingLogin: false }),
  });

export default authReducer;