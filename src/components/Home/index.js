import React, { memo } from 'react';

import { Wrapper } from './styles';
import LeftSide from '../../containers/LeftSide';
import RightSide from '../../containers/RightSide';

const HomeView = memo(() => {
  return (
    <Wrapper>
      <LeftSide />
      <RightSide />
    </Wrapper>
  )
});

export default HomeView;