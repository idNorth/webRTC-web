import React, { memo } from 'react';

import Footer from './parts/Footer';
import Groups from './parts/Groups';
import People from './parts/People';
import { Wrapper, TabsWrapper } from './styles';

const LeftSideView = memo((props) => {
  const { isShow } = props;
  return (
    <Wrapper isShow={isShow}>
      <TabsWrapper>
        <Groups />
        <People />
      </TabsWrapper>
      <Footer />
    </Wrapper>
  )
})

export default LeftSideView;
