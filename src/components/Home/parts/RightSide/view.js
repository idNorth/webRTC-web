import React, { memo } from 'react';

import {
  RoundButton,
  SearchInput,
  StyledButton,
} from '../../../common';
import { ICONS } from '../../../../constants';
import {
  Wrapper,
  roundButtonCS,
  OptionsWrapper,
  styledButtonCS,
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
        icon={ isShow ? ICONS.CROSS : ICONS.SEARCH }
      />
      <SearchInput placeholderId={'search'}/>
      <OptionsWrapper>
        <StyledButton
          id={'users'}
          customStyles={styledButtonCS}
        />
        <StyledButton
          id={'chats'}
          customStyles={styledButtonCS}
        />
      </OptionsWrapper>
    </Wrapper>
  )
})

export default RightSideView