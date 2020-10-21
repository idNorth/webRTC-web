import React, { Component } from 'react';

import { Input } from './styles';

class RenderInput extends Component {
  render() {
    const {
      placeholder,
      onChange,
      customStylesInput,
    } = this.props;
    return (
      <Input
        customStyles={customStylesInput}
        placeholder={placeholder}
        onChange={onChange}
      />
    )
  }
}

RenderInput.defaultProps = {
  placeholder: 'Placeholder',
  onChange: () => {},
  customStylesInput: {},
};

export default RenderInput;
