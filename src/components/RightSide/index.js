import React from 'react';

import { Wrapper } from './styles';
import Chat from './Chat';
import Footer from './Footer';

const RightSideView = () => {
  return (
    <Wrapper>
      <Chat />
      <Footer />
    </Wrapper>
  )
}

export default RightSideView