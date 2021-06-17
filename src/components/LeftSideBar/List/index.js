import React from 'react';

import People from './People';
import Groups from './Groups';

const List = ({ currentList }) => {

  if (currentList) return <People />
  return <Groups />;
};

export default List;
