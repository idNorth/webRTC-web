import React, { memo, useContext } from 'react';

import { Wrapper, roundButtonCS } from './styles';
import { HEADER_ITEMS, ACTION_SIDE } from '../../constants/header';
import { LeftSideBarContext } from '../../helpers/context';
import { RoundButtonWithState } from '../common';

const Header = memo((props) => {
  const LeftSideBar = useContext(LeftSideBarContext);

  return (
    <Wrapper>
      {
        HEADER_ITEMS.map((item, index) => (
          <RoundButtonWithState
            key={index}
            handleClick={item.side === ACTION_SIDE.LEFT ? LeftSideBar.showLeftSideBar : () => {}}
            customStyles={roundButtonCS}
            icon={ item.icon }
          />
        ))
      }
    </Wrapper>
  )
})

export default Header;
