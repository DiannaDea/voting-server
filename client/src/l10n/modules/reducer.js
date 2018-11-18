import {
  CHANGE_APP_LANGUAGE,
} from './types';
import text from '../text';

console.log('HEHHE', text);

export default (state, action) => ({
  [CHANGE_APP_LANGUAGE]: () => ({
    ...state,
    lang: action.payload.lang,
    text: {
      ...text[action.payload.lang],
    },
  }),
});
