import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import { Button } from './styles';

class StyledButton extends Component {
  render() {
    const {
      text,
      intl: { formatMessage },
      id,
      ...res
    } = this.props;
    return (
      <Button {...res}>
        { formatMessage({ id }) }
      </Button>
    )
  }
}

export default injectIntl(StyledButton);
