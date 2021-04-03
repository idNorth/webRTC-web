import React, { memo } from 'react';

import {
  Wrapper
} from './styles';

const Tab = memo((props) => {
  const { labelId, altText, total, isLoading } = props;

  return (
    <Wrapper>
      <div>
        <div>{altText}</div>
        <div>count: {total}</div>
      </div>
      { isLoading && <div>L</div> }
      <div>@</div>
    </Wrapper>
  )
});

export default Tab;