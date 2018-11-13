import initialState from '../store/initialState';
import groupReducer from '../components/GroupSideBar/modules/reducer';
import createGroupReducer from '../routes/CreateGroupForm/modules/reducer';

export default (state = initialState.groups, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    ...groupReducer(state, action),
    ...createGroupReducer(state, action),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
