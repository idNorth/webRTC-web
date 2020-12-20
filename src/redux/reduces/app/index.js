import { createReducer } from '../../../helpers/methods';
import { LOCALIZATIONS } from '../../../constants/localization';

const initialState = {
  localization: LOCALIZATIONS.EN.short,
};

const updateLocalization = (state, { payload }) => ({
  ...state,
  localization: payload.localization,
});

const appReducer = createReducer(initialState,
  {
    SET_LOCALIZATION: updateLocalization,
  });

export default appReducer;