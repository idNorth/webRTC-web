import React, { memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTERS } from '../../constants/routers';
import Header from '../../components/Header';
import { Wrapper } from './styles';
import { setUserToken } from '../../services/api';
import { LeftSideBar } from '../../containers';

const Layout = memo((props) => {
  const { children } = props;

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('UserToken');
    if (token) {
      setUserToken(token);
      history.push(ROUTERS.HOME);
    }
    else history.push(ROUTERS.LOGIN);
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('UserToken');
    const isLoginScreen = history.location.pathname.includes(ROUTERS.LOGIN);
    if (token && isLoginScreen) history.push(ROUTERS.HOME);
    else if (!token && !isLoginScreen) history.push(ROUTERS.LOGIN);
  }, [history.location.pathname])

  return (
    <LeftSideBar>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
    </LeftSideBar>
  )
})

export default Layout;
