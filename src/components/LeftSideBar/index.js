import React, { memo } from 'react';

import Footer from './parts/Footer';
import { Wrapper } from './styles';

const LeftSideView = memo((props) => {
  const { isShow } = props;
  return (
    <Wrapper isShow={isShow}>
      <Footer />
    </Wrapper>
  )
})

export default LeftSideView;
