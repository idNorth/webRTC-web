import React, { memo } from 'react';
import { injectIntl } from 'react-intl';

import { Button } from './styles';

const StyledButton = memo((props) => {
  const {
    text,
    intl: { formatMessage, messages },
    id,
    ...res
  } = props;

  return (
    <Button {...res}>
      { !!messages[id] ? formatMessage({ id }) : 'StyledButton' }
    </Button>
  )
})

export default injectIntl(StyledButton);
