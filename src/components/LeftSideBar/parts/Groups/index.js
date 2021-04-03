import React, { memo, useState } from 'react';

import { Wrapper } from './styles';
import { Tab } from '../../../common';

const Groups = memo((props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Tab
        labelId="groups"
        altText="Groups"
      />
    </Wrapper>
  )
})

export default Groups;
