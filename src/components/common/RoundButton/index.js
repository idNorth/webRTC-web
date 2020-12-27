import React, { memo } from 'react';

import { Button } from './styles';
import { ICONS } from '../../../constants';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

const RoundButton = memo((props) => {
  const { handleClick, customStyles, icon } = props;

  const renderIcon = () => {
    switch (icon) {
      case ICONS.MENU: return <MenuIcon />
      case ICONS.CROSS: return <CloseIcon />
      case ICONS.SEARCH: return <SearchIcon />
    }
  }

  return (
    <Button
      onClick={handleClick}
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
