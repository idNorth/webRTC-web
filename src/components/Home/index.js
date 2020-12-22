import React, { memo } from 'react';

import RightSide from './parts/RightSide';
import { Wrapper } from './styles';

const HomeView = memo(() => {
  return (
    <Wrapper>
      Hello
      <RightSide />
    </Wrapper>
  )
});

export default HomeView;