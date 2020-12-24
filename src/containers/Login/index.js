import React, { memo } from 'react';
import { connect } from 'react-redux';

import LoginView from '../../components/Login';
import { ROUTERS } from '../../constants/routers';
import { loginAction } from '../../redux/reduces/auth/actions';

const Login = memo((props) => {
  const { history, loginAction } = props;
  const onSubmit = async (form) => {
    try {
      await loginAction(form)
      // history.push(ROUTERS.HOME)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LoginView
      onSubmit={onSubmit}
    />
  )
})

const dispatchToProps = {
  loginAction
}

export default connect(null, dispatchToProps)(Login);