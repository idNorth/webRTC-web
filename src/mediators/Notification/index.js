import React, { memo, useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';

import { NOTIFICATION_TYPES } from '../../constants';
import { NotificationProvider } from '../../helpers/context';
import {
  SuccessNotification,
  ErrorNotification,
  WarningNotification,
} from './styles';

const Notification = memo((props) => {
  const { children, intl: { formatMessage, messages } } = props;

  let timeOut = null;

  const [isShow, setIseShow] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!isShow) return;
    timeOut = setTimeout(() => {
      setIseShow(false)
      setData(null)
    }, 4000);
  }, [isShow])

  const handleClick = () => {
    setIseShow(false)
    setData(null)
  }

  const handleMouseOver = () => clearTimeout(timeOut);

  const handleMouseOut = () => {
    timeOut = setTimeout(() => {
      setIseShow(false)
      setData(null)
    }, 4000);
  };

  const renderText = ({ code, message }) => !!messages[code] ? formatMessage({ id: code }) : message;

  const renderNotification = () => {
    if (!isShow) return null;

    switch (data.type) {
      case NOTIFICATION_TYPES.SUCCESS: {
        return (
          <SuccessNotification
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            { renderText(data.msg) }
          </SuccessNotification>
        );
      }
      case NOTIFICATION_TYPES.ERROR: {
        return (
          <ErrorNotification
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            { renderText(data.msg) }
          </ErrorNotification>
        );
      }
      case NOTIFICATION_TYPES.WARNING: {
        return (
          <WarningNotification
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            { renderText(data.msg) }
          </WarningNotification>
        );
      }
      default: return null;
    }
  };

  const setNotificationData = (data) => {
    setData(data);
    setIseShow(true)
  }

  return (
    <NotificationProvider value={{ setNotificationData }}>
      { renderNotification() }
      { children }
    </NotificationProvider>
  )
})

export default injectIntl(Notification);
