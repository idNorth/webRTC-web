import React, { useState, memo } from 'react';

import LeftSideBarView from '../../components/LeftSideBar';
import { LeftSideBarProvider } from '../../helpers/context';

const LeftSideBar = memo((props) => {
  const { children } = props;

  const [isShow, setIsShow] = useState(false);

  return (
    <LeftSideBarProvider value={{ showLeftSideBar: setIsShow }}>
      <LeftSideBarView
        isShow={isShow}
      />
      { children }
    </LeftSideBarProvider>
  )
})

export default LeftSideBar;
