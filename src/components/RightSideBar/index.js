import React, { memo } from 'react';

import {
  SearchInput,
  StyledButton,
} from '../../components/common';
import {
  Wrapper,
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