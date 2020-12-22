import React, { memo } from 'react';

import { RoundButton, SearchInput } from '../../../common';
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
      <SearchInput placeholderId={'searchPlaceholder'}/>
    </Wrapper>
  )
})

export default RightSideView