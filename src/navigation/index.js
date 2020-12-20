import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  Login,
  Layout
} from '../containers';
import { ROUTERS } from '../constants/routers';

class Routers extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path={ROUTERS.LOGIN} component={Login} />
          <Route exact path={ROUTERS.HOME} component={Home} />
          <Route path={ROUTERS.NOT_FOUND} component={Login} />
        </Switch>
      </Layout>
    )
  }
}

export default Routers;
