import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import groupsReducer from './groups';
import votingReducer from './votings';
import userReducer from './user';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  groups: groupsReducer,
  votings: votingReducer,
  user: userReducer,
});

export default rootReducer;
