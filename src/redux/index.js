import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reduces';
import apiMiddleware from './middleware/apiMiddleware';
import api from '../services/api';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [
  apiMiddleware(api),
  thunk,
  promise,
  logger,
];

export const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store)
