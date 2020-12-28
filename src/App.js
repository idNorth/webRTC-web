import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react'

import Routers from './routers';
import LocaleProvider from './services/localization';
import { GlobalStyle } from './styles';
import { store, persistor } from './redux';
import { Notification } from '../src/mediators';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <GlobalStyle />
        <LocaleProvider>
          <Notification>
            <Routers />
          </Notification>
        </LocaleProvider>
      </Router>
    </PersistGate>
  </Provider>
)

export default App;