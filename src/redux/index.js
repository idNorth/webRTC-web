import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reduces';

const middleware = [
  logger,
];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
