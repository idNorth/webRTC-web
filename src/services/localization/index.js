import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
// import 'intl';
// import 'intl/locale-data/jsonp/en';
// import 'intl/locale-data/jsonp/ru';

import { ru, en } from './languages';
import { LOCALIZATIONS } from '../../constants/localization';

class LocaleProvider extends Component {
  getLocalization = () => {
    const { localization } = this.props;
    switch (localization) {
      case LOCALIZATIONS.RU.short: return ru;
      case LOCALIZATIONS.EN.short:
      default: return en;
    }
  };

  render() {
    const { localization } = this.props;
    console.log(this.props);
    return (
      <IntlProvider
        locale={LOCALIZATIONS[localization].short}
        messages={this.getLocalization()}
      >
        {this.props.children}
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  localization: state.app.localization,
});

export default connect(mapStateToProps)(LocaleProvider);