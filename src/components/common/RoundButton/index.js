import React, { Component } from 'react';

import { Button } from './styles';
import MenuIcon from '@material-ui/icons/Menu';

class RoundButton extends Component {
  render() {
    const { icon } = this.props;
    return (
      <Button>
        <MenuIcon />
      </Button>
    )
  }
}

export default RoundButton;
