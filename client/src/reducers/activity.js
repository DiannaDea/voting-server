import initialState from '../store/initialState';
import activityReducer from '../routes/Activity/modules/reducer';

export default (state = initialState.userActivity, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    ...activityReducer(state, action),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
