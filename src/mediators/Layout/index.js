import React, { memo } from 'react';

import Header from '../../components/Header';
import { Wrapper } from './styles';
import { LeftSideBar } from '../../containers';

const Layout = memo((props) => {
  const { children } = props;

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
