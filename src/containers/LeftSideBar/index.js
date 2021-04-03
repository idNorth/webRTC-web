import React, { useState, memo } from 'react';

import LeftSideBarView from '../../components/LeftSideBar';
import { LeftSideBarProvider } from '../../helpers/context';

const LeftSideBar = memo((props) => {
  const { children } = props;

  // TODO default false
  const [isShow, setIsShow] = useState(true);

  return (
    <LeftSideBarProvider value={{ showLeftSideBar: () => setIsShow((prev) => !prev) }}>
      <LeftSideBarView
        isShow={isShow}
      />
      { children }
    </LeftSideBarProvider>
  )
})

export default LeftSideBar;
