import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import groupsReducer from './groups';
import votingReducer from './votings';
import userReducer from './user';
import joinGroupReducer from './joinGroup';
import languageReducer from './languages';
import resultsReducer from './votingResults';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  groups: groupsReducer,
  votings: votingReducer,
  user: userReducer,
  joinGroup: joinGroupReducer,
  language: languageReducer,
  votingResults: resultsReducer,
});

export default rootReducer;
