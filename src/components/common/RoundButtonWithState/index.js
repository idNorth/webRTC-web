import React, { memo, useState, useEffect } from 'react';

import { Button } from './styles';
import { ICONS } from '../../../constants';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const RoundButton = memo((props) => {
  const { handleClick, customStyles, icon } = props;

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    handleClick(isShow)
    return () => handleClick(false)
  }, [isShow])

  const renderIcon = () => {
    switch (icon) {
      case ICONS.MENU: return <MenuIcon />
      case ICONS.CROSS: return <CloseIcon />
      case ICONS.SEARCH: return <SearchIcon />
      case ICONS.EXIT: return <ExitToAppIcon />
    }
  }

  return (
    <Button
      onClick={() => setIsShow(!isShow)}
      customStyles={customStyles.button}
    >
      { renderIcon() }
    </Button>
  )
});

RoundButton.defaultProps = {
  customStyles: {
    button: {},
    icon: {},
  }
};

export default RoundButton;
