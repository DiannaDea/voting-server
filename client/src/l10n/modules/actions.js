import {
  CHANGE_APP_LANGUAGE,
} from './types';

export const changeLanguage = payload => ({
  type: CHANGE_APP_LANGUAGE,
  payload: {
    ...payload,
  },
});
