import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import groupsReducer from '../components/GroupSideBar/utils/reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    groups: groupsReducer,
});


export default rootReducer;
