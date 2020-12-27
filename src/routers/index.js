import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  Login,
} from '../containers';
import {
  Layout,
  Notification,
} from '../mediators'
import { ROUTERS } from '../constants/routers';

const Routers = memo(() => {
  return (
    <Notification>
        <Layout>
          <Switch>
            <Route exact path={ROUTERS.LOGIN} component={Login} />
            <Route exact path={ROUTERS.HOME} component={Home} />
            <Route path={ROUTERS.NOT_FOUND} component={Login} />
          </Switch>
        </Layout>
    </Notification>
  )
})

export default Routers;
