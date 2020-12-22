import React, { memo } from 'react';
import { injectIntl } from 'react-intl';

import {
  Wrapper,
  Input,
  Error,
  Warning,
} from './styles';

const SimpleInput = memo((props) => {
  const {
    intl: { formatMessage },
    meta: { touched, error, warning },
    customStyles,
    input,
    placeholderId,
    ...res
  } = props;

  const renderError = () => {
    if (!touched) return null
    if (error) return <Error customStyles={customStyles.error}>{ formatMessage({ id: error }) }</Error>
    if (warning) return <Warning customStyles={customStyles.warning}>{ formatMessage({ id: warning }) }</Warning>
  }

  return (
    <Wrapper customStyles={customStyles.wrapper}>
      <Input
        customStyles={customStyles.input}
        placeholder={formatMessage({ id: placeholderId })}
        {...input}
        {...res}
      />
      { renderError() }
    </Wrapper>
  )
})

SimpleInput.defaultProps = {
  customStyles: {
    wrapper: {},
    input: {},
    error: {},
    warning: {},
  }
};

export default injectIntl(SimpleInput);
