import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { SimpleInput } from '../common';
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
            name="userName"
            component={SimpleInput}
          />
          <button type="submit">
            Click
          </button>
        </Form>
      </Wrapper>
    )
  }
}

LoginView = reduxForm({
  form: 'loginForm',
})(LoginView);

export default LoginView;