import React, { memo } from 'react';

import RightSide from './parts/RightSide';
import LeftSide from './parts/LeftSide';
import { Wrapper } from './styles';

const HomeView = memo(() => {
  return (
    <Wrapper>
      <LeftSide />
      Hello
      <RightSide />
    </Wrapper>
  )
});

export default HomeView;