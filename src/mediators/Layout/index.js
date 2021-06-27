import React, { memo, Fragment } from 'react';

import Header from '../../components/Header';
import { Wrapper } from './styles';

const Layout = memo(({ children }) => {
  return (
    <Fragment>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
    </Fragment>
  )
})

export default Layout;
