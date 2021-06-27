import React from 'react';

import { Wrapper } from './styles';
import VideoChat from './VideoChat';
import Footer from './Footer';

const LeftSideView = () => {
  return (
    <Wrapper>
      <VideoChat />
      <Footer />
    </Wrapper>
  )
}

export default LeftSideView