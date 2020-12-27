import React, { useState, memo } from 'react';

import LeftSideView from './view';

const LeftSide = memo(() => {
  const [isShow, setIsShow] = useState(false);

  return (
    <LeftSideView
      isShow={isShow}
      setIsShow={() => setIsShow(!isShow)}
    />
  )
})

export default LeftSide;
