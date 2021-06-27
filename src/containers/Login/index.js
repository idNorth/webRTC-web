import React, { memo, useContext } from 'react';
import { connect } from 'react-redux';

import LoginView from '../../components/Login';
import { ROUTERS } from '../../constants/routers';
import { loginAction } from '../../redux/reduces/auth/actions';
import {
  getChatAction,
  createChatAction,
} from '../../redux/reduces/chat/actions';
import { NotificationContext } from '../../helpers/context';
import { parseError } from '../../helpers/methods';
import { NOTIFICATION_TYPES } from '../../constants';

const Login = memo(({
                      history,
                      loginAction,
                      getChatAction,
                      createChatAction,
                    }) => {
  const Notification = useContext(NotificationContext);

  const onSubmit = async (form) => {
    try {
      await loginAction(form)
      await createChatAction();
      // TODO
      await getChatAction('60d8dda66eb7330c0950ac47');
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
  loginAction,
  getChatAction,
  createChatAction,
}

export default connect(null, mapDispatchToProps)(Login);