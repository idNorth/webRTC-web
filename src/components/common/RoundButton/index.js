import React, { memo } from 'react';

import { Button } from './styles';
import MenuIcon from '@material-ui/icons/Menu';

const RoundButton = memo((props) => {
  const { handleClick } = props;
  return (
    <Button onClick={handleClick}>
      <MenuIcon />
    </Button>
  )
});

export default RoundButton;
