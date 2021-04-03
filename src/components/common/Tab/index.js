import React, { memo } from 'react';
import Loader from "react-loader-spinner";

import {
  Wrapper,
  Icon
} from './styles';

const arrow = require('../../../assets/img/angle-arrow-down.svg')

const Tab = memo((props) => {
  const {
    labelId,
    altText,
    total,
    isLoading,
    isOpen,
    onClick = () => {},
  } = props;

  return (
    <Wrapper>
      <div>
        <div>{altText}</div>
        <div>count: {total}</div>
      </div>
      {
        isLoading && (
          <Loader
            type="TailSpin"
            color="#cec"
            height={35}
            width={35}
          />
        )
      }
      <Icon
        src={arrow}
        isOpen={isOpen}
        onClick={onClick}
      />
    </Wrapper>
  )
});

export default Tab;