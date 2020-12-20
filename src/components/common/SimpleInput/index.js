import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import {
  Wrapper,
  Input,
  Error,
  Warning,
} from './styles';

class SimpleInput extends Component {
  renderError = () => {
    const {
      intl: { formatMessage },
      meta: { touched, error, warning },
      customStyles,
    } = this.props;

    if (!touched) return null
    if (error) return <Error customStyles={customStyles.error}>{ formatMessage({ id: error }) }</Error>
    if (warning) return <Warning customStyles={customStyles.warning}>{ formatMessage({ id: warning }) }</Warning>
  }

  render() {
    const {
      input,
      customStyles,
      intl: { formatMessage },
      placeholderId,
      ...res
    } = this.props;

    return (
      <Wrapper customStyles={customStyles.wrapper}>
        <Input
          customStyles={customStyles.input}
          placeholder={formatMessage({ id: placeholderId })}
          {...input}
          {...res}
        />
        { this.renderError() }
      </Wrapper>
    )
  }
}

SimpleInput.defaultProps = {
  customStyles: {
    wrapper: {},
    input: {},
    error: {},
    warning: {},
  }
};

export default injectIntl(SimpleInput);
