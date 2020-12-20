import React, { Component } from 'react';

import {
  Wrapper,
  Input,
  Error,
  Warning,
} from './styles';

class SimpleInput extends Component {
  renderError = () => {
    const { meta: { touched, error, warning }, customStyles } = this.props;
    if (!touched) return null
    if (error) return <Error customStyles={customStyles.error}>{ error }</Error>
    if (warning) return <Warning customStyles={customStyles.warning}>{ warning }</Warning>
  }

  render() {
    const { input, customStyles, ...res } = this.props;

    return (
      <Wrapper customStyles={customStyles.wrapper}>
        <Input customStyles={customStyles.input} {...input} {...res}/>
        { this.renderError() }
      </Wrapper>
    )
  }
}

SimpleInput.defaultProps = {
  customStyles: {
    wrapper: {},
    input: {},
    error: {},
    warning: {},
  }
};

export default SimpleInput;
