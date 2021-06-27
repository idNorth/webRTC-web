import React, { memo, useContext } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { NOTIFICATION_TYPES}  from '../../constants';
import { ROUTERS } from '../../constants/routers';
import { NotificationContext } from '../../helpers/context';
import { logoutAction } from '../../redux/reduces/auth/actions';
import { parseError } from '../../helpers/methods';
import { Wrapper } from './styles';

const Header = memo(({ logoutAction }) => {
  const history = useHistory();
  const Notification = useContext(NotificationContext);

  const handleLogout = async () => {
    try {
      await logoutAction();
      history.push(ROUTERS.LOGIN);
    } catch (err) {
      Notification.setNotificationData({
        type: NOTIFICATION_TYPES.ERROR,
        msg: parseError(err),
      })
    }
  };

  return (
    <Wrapper>
      <span>WER RTC</span>
      <div onClick={handleLogout}>Logout</div>
    </Wrapper>
  )
})

const mapDispatchToProps = {
  logoutAction,
}

export default connect(null, mapDispatchToProps)(Header);
