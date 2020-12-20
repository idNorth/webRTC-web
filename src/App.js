import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';

import Navigation from './navigation';
import { GlobalStyle } from './styles';
import { store } from './redux';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <Navigation />
    </Router>
  </Provider>
)

export default App;