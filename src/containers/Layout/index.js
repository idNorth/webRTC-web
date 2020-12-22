import React, { memo } from 'react';

const Layout = memo((props) => {
  const { children } = props;
  return (
    <>
      {children}
    </>
  )
})

export default Layout;
