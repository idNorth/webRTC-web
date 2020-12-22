import React, { memo } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { ru, en } from './languages';
import { LOCALIZATIONS } from '../../constants/localization';

const LocaleProvider = memo((props) => {
  const { localization, children } = props;

  const getLocalization = () => {
    switch (localization) {
      case LOCALIZATIONS.RU.short: return ru;
      case LOCALIZATIONS.EN.short:
      default: return en;
    }
  };

  return (
    <IntlProvider
      locale={LOCALIZATIONS[localization].short}
      messages={getLocalization()}
    >
      {children}
    </IntlProvider>
  );
})

const mapStateToProps = (state) => ({
  localization: state.app.localization,
});

export default connect(mapStateToProps)(LocaleProvider);