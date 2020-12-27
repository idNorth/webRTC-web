import React, { memo } from 'react';

import { LoaderProvider } from '../../helpers/context';

const Loader = memo((props) => {
  const { children } = props;
  return (
    <div>
      Loader
      { children }
    </div>
  )
})

export default Loader;
