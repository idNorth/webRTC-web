import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TranslateIcon from '@material-ui/icons/Translate';

import { setLocalization } from '../../../redux/reduces/app/action';
import { LOCALIZATIONS } from '../../../constants/localization';

import { Wrapper } from './styles';

class LocalizationSelector extends Component {
  handleChange = (event) => {
    const { setLocalization } = this.props;
    setLocalization(event.target.value);
  };

  render() {
    const { localization } = this.props;
    return (
      <Wrapper>
        <TranslateIcon />
        <Select
          value={LOCALIZATIONS[localization].short}
          onChange={this.handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {
            Object.keys(LOCALIZATIONS).map((lang, index) => (
              <MenuItem
                key={index}
                value={LOCALIZATIONS[lang].short}
              >
                { LOCALIZATIONS[lang].long }
              </MenuItem>
            ))
          }
        </Select>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  localization: state.app.localization,
})

const DispatchToProps = {
  setLocalization
}

export default connect(mapStateToProps, DispatchToProps)(LocalizationSelector);