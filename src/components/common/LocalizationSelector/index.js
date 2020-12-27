import React, { memo } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TranslateIcon from '@material-ui/icons/Translate';

import { setLocalization } from '../../../redux/reduces/app/actions';
import { LOCALIZATIONS } from '../../../constants/localization';

import { Wrapper } from './styles';

const LocalizationSelector = memo((props) => {
  const { localization, setLocalization } = props;

  const handleChange = (event) => {
    setLocalization(event.target.value);
  };

  return (
    <Wrapper>
      <TranslateIcon />
      <Select
        value={LOCALIZATIONS[localization].short}
        onChange={handleChange}
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
});

const mapStateToProps = (state) => ({
  localization: state.app.localization,
})

const mapDispatchToProps = {
  setLocalization
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalizationSelector);