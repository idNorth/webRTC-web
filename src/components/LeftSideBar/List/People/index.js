import React, { memo, useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";

import {
  getUsersAction,
} from '../../../../redux/reduces/user/actions';
import { Wrapper, UserTab, LoaderWrapper } from './styles';
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

  let userInterval = null;
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
    userInterval = setInterval(fetchData, 10000)
    return () => {
      clearInterval(userInterval)
    }
  }, []);

  if (isLoadingGetUsers) return (
    <LoaderWrapper>
      <Loader
        type="TailSpin"
        color="#cec"
        height={35}
        width={35}
      />
    </LoaderWrapper>

  )

  return (
    <Wrapper>
      {
        users.map((user) => (
          <UserTab key={user.key}>
            <div>name: {user.username}</div>
            <div>key: {user.key}</div>
          </UserTab>
        ))
      }
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
