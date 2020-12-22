import React, { memo } from 'react';

import LoginView from '../../components/Login';

const Login = memo((props) => {

  const onSubmit = (form) => {
    this.props.history.push('/home')
  }

  return (
    <LoginView
      onSubmit={onSubmit}
    />
  )
})

export default Login;