import React, {memo, useContext, useEffect} from 'react';
import { connect } from 'react-redux';

import {
  getUsersAction,
} from '../../../../redux/reduces/user/actions';
import { Wrapper } from './styles';
import { Tab } from '../../../common';
import { NotificationContext } from '../../../../helpers/context';
import { NOTIFICATION_TYPES } from '../../../../constants';
import { parseError } from '../../../../helpers/methods';

const People = memo((props) => {
  const {
    users,
    total,
    isLoadingGetUsers,
    getUsersAction,
  } = props;

  const { setNotificationData } = useContext(NotificationContext);

  const fetchData = async () => {
    try {
      if (total < users.length) return;
      await getUsersAction();
    } catch (err) {
      setNotificationData({
        type: NOTIFICATION_TYPES.ERROR,
        msg: parseError(err),
      })
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Tab
        labelId="people"
        altText="People"
        total={total}
        isLoading={isLoadingGetUsers}
      />
    </Wrapper>
  )
})

const mapStateToProps = (state) => ({
  users: state.user.users,
  total: state.user.total,
  isLoadingGetUsers: state.user.isLoadingGetUsers,
})

const mapDispatchToProps = {
  getUsersAction
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
