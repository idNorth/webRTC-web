import React, { useState, memo } from 'react';

import RightSideView from './view';

const RightSide = memo(() => {
  const [isShow, setIsShow] = useState(false);

  return (
    <RightSideView
      isShow={isShow}
      setIsShow={() => setIsShow(!isShow)}
    />
  )
})

export default RightSide;
