import React, {memo, useContext} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Wrapper,
  roundButtonCS,
} from './styles';
import { ICONS, NOTIFICATION_TYPES}  from '../../../constants';
import { ROUTERS } from '../../../constants/routers';
import { RoundButton } from '../../common';
import { NotificationContext } from '../../../helpers/context';
import { logoutAction } from '../../../redux/reduces/auth/actions';
import { parseError } from '../../../helpers/methods';

const Footer = memo((props) => {
  const { logoutAction } = props;

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
      <RoundButton
        handleClick={handleLogout}
        customStyles={roundButtonCS}
        icon={ ICONS.EXIT }
      />
    </Wrapper>
  )
})

const mapDispatchToProps = {
  logoutAction,
}

export default connect(null, mapDispatchToProps)(Footer);
