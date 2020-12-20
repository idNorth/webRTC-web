import {
  SET_LOCALIZATION,
} from './types';

export const setLocalization = (localization) => ({
  type: SET_LOCALIZATION,
  payload: { localization },
});