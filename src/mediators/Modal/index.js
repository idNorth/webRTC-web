import React, { memo } from 'react';

import { ModalProvider } from '../../helpers/context';

const Modal = memo((props) => {
  const { children } = props;
  return (
    <ModalProvider value={{ hello: 'hello' }}>
      Modal
      { children }
    </ModalProvider>
  )
})

export default Modal;
