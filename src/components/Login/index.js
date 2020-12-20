import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { SimpleInput, StyledButton } from '../common';
import validate from './validation';
import {
  Wrapper,
  Form
} from './styles';

class LoginView extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Field
            name="username"
            component={SimpleInput}
          />
          <StyledButton
            type="submit"
            text="Click"
          />
        </Form>
      </Wrapper>
    )
  }
}

LoginView = reduxForm({
  form: 'loginForm',
  validate,
})(LoginView);

export default LoginView;