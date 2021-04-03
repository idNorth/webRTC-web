import React, {memo, useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTERS } from '../../constants/routers';
import { setUserToken } from '../../services/api';
import {
  FullScreenLoaderContext,
  NotificationContext,
} from '../../helpers/context';
import {NOTIFICATION_TYPES} from "../../constants";
import {parseError} from "../../helpers/methods";

const CheckAuth = memo((props) => {
  const { setFullScreenLoaderConf } = useContext(FullScreenLoaderContext);
  const { setNotificationData } = useContext(NotificationContext);

  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);

  const checkToken = async () => {
    try {
      setFullScreenLoaderConf(true, true);
      setIsLoading(true);
      const token = await localStorage.getItem('UserToken');

      let nextRoute = ROUTERS.LOGIN;

      if (token) {
        await setUserToken(token);
        nextRoute = ROUTERS.HOME
      }

      history.push(nextRoute);
    } catch (err) {
      setNotificationData({
        type: NOTIFICATION_TYPES.ERROR,
        msg: parseError(err),
      })
    } finally {
      setIsLoading(false);
      setFullScreenLoaderConf()
    }
  }

  useEffect(() => {
    checkToken();
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('UserToken');
    const isLoginScreen = history.location.pathname.includes(ROUTERS.LOGIN);
    if (!token && !isLoginScreen) history.push(ROUTERS.LOGIN);
  }, [history.location.pathname])

  return isLoading ? null : props.children
})

export default CheckAuth;
