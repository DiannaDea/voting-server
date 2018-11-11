import initialState from '../store/initialState';
import joinGroupReducer from '../routes/SignUp/modules/reducer';

export default (state = initialState.joinGroup, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    ...joinGroupReducer(state, action),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
