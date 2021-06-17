import React, { useState, memo } from 'react';

import LeftSideBarView from '../../components/LeftSideBar';
import { LeftSideBarProvider } from '../../helpers/context';

const LeftSideBar = memo((props) => {
  const { children } = props;

  // TODO default false
  const [isShow, setIsShow] = useState(true);
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <LeftSideBarProvider value={{ showLeftSideBar: () => setIsShow((prev) => !prev) }}>
      <LeftSideBarView
        isShow={isShow}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      { children }
    </LeftSideBarProvider>
  )
})

export default LeftSideBar;
