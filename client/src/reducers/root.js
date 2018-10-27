import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import groupsReducer from '../components/GroupSideBar/utils/reducer';
import votingReducer from '../components/NavSideBar/utils/reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    groups: groupsReducer,
    votings: votingReducer,
});

export default rootReducer;
