import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import appReducer from './app';

const rootReducer = combineReducers({
  form: formReducer,
  app: appReducer,
})

export default rootReducer;
