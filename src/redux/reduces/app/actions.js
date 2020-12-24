import {
  SET_LOCALIZATION,
} from './types';

export const setLocalization = (localization) => async (dispatch) => dispatch({
  type: SET_LOCALIZATION,
  payload: { localization }
});