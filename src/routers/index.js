import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  Login,
} from '../containers';
import { Layout } from '../mediators'
import { ROUTERS } from '../constants/routers';

const Routers = memo(() => {
  return (
    <Switch>
      <Route exact path={ROUTERS.LOGIN} component={Login} />
      <Layout>
        <Route exact path={ROUTERS.HOME} component={Home} />
      </Layout>
      <Route path={ROUTERS.NOT_FOUND} component={Login} />
    </Switch>
  )
})

export default Routers;
