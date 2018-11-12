import initialState from '../store/initialState';
import signInReducer from '../routes/LoginForm/modules/reducer';

export default (state = initialState.user, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    ...signInReducer(state, action),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
