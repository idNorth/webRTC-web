import React, { memo } from 'react';

import LoginView from '../../components/Login';

const Login = memo((props) => {
  const { history } = props;
  const onSubmit = (form) => {
    history.push('/home')
  }

  return (
    <LoginView
      onSubmit={onSubmit}
    />
  )
})

export default Login;