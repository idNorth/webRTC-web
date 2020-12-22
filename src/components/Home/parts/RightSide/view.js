import React, { memo } from 'react';

import { RoundButton } from '../../../common';
import { ICONS } from '../../../../constants';
import {
  Wrapper,
  roundButtonCS
} from './styles';

const RightSideView = memo((props) => {
  const { isShow, setIsShow } = props;
  return (
    <Wrapper
      isShow={isShow}
      setIsShow={setIsShow}
    >
      <RoundButton
        handleClick={setIsShow}
        customStyles={roundButtonCS}
        icon={ isShow ? ICONS.CROSS : ICONS.MENU }
      />
      RightSideView
    </Wrapper>
  )
})

export default RightSideView