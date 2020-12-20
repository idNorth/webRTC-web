import React, { Component } from 'react';

import Sidebar from './parts/Sidebar';
import { RoundButton } from '../common';
import { Wrapper } from './styles';

class HomeView extends Component {
  render() {
    return (
      <Wrapper>
        Hello
        <RoundButton />
        <Sidebar />
      </Wrapper>
    )
  }
}

export default HomeView;