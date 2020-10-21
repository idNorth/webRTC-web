import React, { Component } from 'react';
import { Image, Wrapper, Block } from './styles';

class Background extends Component {
  render() {
    return (
      <Wrapper>
        <Block />
        <Image src={require('../../assets/img/nature.jpg')}/>
      </Wrapper>
    )
  }
}

export default Background;
