import React, { memo } from 'react';
import { injectIntl } from 'react-intl';

import { Button } from './styles';

const StyledButton = memo((props) => {
  const {
    text,
    intl: { formatMessage },
    id,
    ...res
  } = props;

  return (
    <Button {...res}>
      { formatMessage({ id }) }
    </Button>
  )
})

export default injectIntl(StyledButton);
