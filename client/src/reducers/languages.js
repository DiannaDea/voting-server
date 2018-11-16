import initialState from '../store/initialState';
import langReducer from '../l10n/modules/reducer';

export default (state = initialState.appText, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    ...langReducer(state, action),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
