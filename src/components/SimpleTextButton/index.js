import React, { Component } from 'react';

import { Button, Text } from './styles';

class SimpleTextButton extends Component {
  render() {
    const { label, onClick, customStylesButton, customStylesText } = this.props;
    return (
      <Button
        customStyles={customStylesButton}
        onClick={onClick}
      >
        <Text customStyles={customStylesText}>{label}</Text>
      </Button>
    )
  }
}

SimpleTextButton.defaultProps = {
  label: 'Button',
  onClick: () => {},
  customStylesButton: {},
  customStylesText: {}
};

export default SimpleTextButton;
