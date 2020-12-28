import React, { useState, memo } from 'react';

import RightSideView from '../../components/RightSideBar';

const RightSideBar = memo(() => {
  const [isShow, setIsShow] = useState(false);

  return (
    <RightSideView
      isShow={isShow}
      setIsShow={() => setIsShow(!isShow)}
    />
  )
})

export default RightSideBar;
