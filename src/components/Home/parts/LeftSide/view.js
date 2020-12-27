import React, { memo } from 'react';

import { RoundButton } from '../../../common';
import { ICONS } from '../../../../constants';
import Footer from './parts/Footer';
import {
  Wrapper,
  roundButtonCS,
} from './styles';

const LeftSideView = memo((props) => {
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
      <div />
      <Footer />
    </Wrapper>
  )
})

export default LeftSideView;
