import React, { Component } from 'react';

import { Button } from './styles';

class StyledButton extends Component {
  render() {
    const {
      text,
      ...res
    } = this.props;
    return (
      <Button {...res}>
        { text }
      </Button>
    )
  }
}

export default StyledButton;
