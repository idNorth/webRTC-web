import React, { memo } from 'react';

import { RoundButton } from '../../../common';
import {
  Wrapper
} from './styles';

const RightSideView = memo((props) => {
  const { isShow, setIsShow } = props;
  return (
    <>
      <RoundButton handleClick={setIsShow} />
      <Wrapper
        isShow={isShow}
        setIsShow={setIsShow}
      >
        RightSideView
      </Wrapper>
    </>
  )
})

export default RightSideView