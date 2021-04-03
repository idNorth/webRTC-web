import React, { memo, useState } from 'react';
import { FullScreenLoaderProvider } from '../../helpers/context';
import { Wrapper } from './styles';

const FullScreenLoader = memo((props) => {
  const { children } = props;

  const [state, setState] = useState({
    isOverlay: false,
    isLoading: false,
  });

  return (
    <FullScreenLoaderProvider value={{
      setFullScreenLoaderConf: (isLoading = false, isOverlay = false) => setState({ isLoading, isOverlay }),
    }}>
      { state.isLoading && <Wrapper isOverlay={state.isOverlay} /> }
      { children }
    </FullScreenLoaderProvider>
  )
})

export default FullScreenLoader;