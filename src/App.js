import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';

import Routers from './routers';
import LocaleProvider from './services/localization';
import { GlobalStyle } from './styles';
import { store } from './redux';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <LocaleProvider>
        <Routers />
      </LocaleProvider>
    </Router>
  </Provider>
)

export default App;