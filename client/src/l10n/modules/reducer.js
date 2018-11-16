import {
  CHANGE_APP_LANGUAGE,
} from './types';
import text from '../text';

export default (state, action) => ({
  [CHANGE_APP_LANGUAGE]: () => ({
    ...state,
    ...text[action.payload.lang],
  }),
});
