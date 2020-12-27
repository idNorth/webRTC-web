import React, { memo, useContext } from 'react';
import { connect } from 'react-redux';

import LoginView from '../../components/Login';
import { ROUTERS } from '../../constants/routers';
import { loginAction } from '../../redux/reduces/auth/actions';
import { NotificationContext } from '../../helpers/context';
import { parseError } from '../../helpers/methods';
import { NOTIFICATION_TYPES } from '../../constants';

const Login = memo((props) => {
  const { history, loginAction } = props;

  const Notification = useContext(NotificationContext);

  const onSubmit = async (form) => {
    try {
      await loginAction(form)
      history.push(ROUTERS.HOME)
    } catch (err) {
      Notification.setNotificationData({
        type: NOTIFICATION_TYPES.ERROR,
        msg: parseError(err),
      })
    }
  }

  return (
    <LoginView
      onSubmit={onSubmit}
    />
  )
})

const mapDispatchToProps = {
  loginAction
}

export default connect(null, mapDispatchToProps)(Login);