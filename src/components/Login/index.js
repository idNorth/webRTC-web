import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { SimpleInput, StyledButton, LocalizationSelector } from '../common';
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
        <LocalizationSelector />
        <Form onSubmit={handleSubmit}>
          <Field
            name="username"
            component={SimpleInput}
            placeholderId="name"
          />
          <StyledButton
            type="submit"
            id="login"
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