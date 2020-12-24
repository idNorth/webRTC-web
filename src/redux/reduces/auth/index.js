import { createReducer } from '../../../helpers/methods';

const initialState = {
  isLoadingLogin: false,
};

const authReducer = createReducer(initialState,
  {
    LOGIN_START: (state) => ({ ...state, isLoadingLogin: true }),
    LOGIN_SUCCESS: (state) => ({ ...state, isLoadingLogin: false }),
    LOGIN_FAIL: (state) => ({ ...state, isLoadingLogin: false }),
  });

export default authReducer;