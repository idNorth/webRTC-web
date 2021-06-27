import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './app';
import authReducer from './auth';
import userReducer from './user';
import chatReducer from './chat';

const appPersistConfig = {
  key: 'app',
  storage: storage,
  whitelist: ['localization']
};

const rootReducer = combineReducers({
  form: formReducer,
  app: persistReducer(appPersistConfig, appReducer),
  auth: authReducer,
  user: userReducer,
  chat: chatReducer,
})

export default rootReducer;
