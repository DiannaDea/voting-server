import initialState from '../store/initialState';
import votingNewRecentReducer from '../components/NavSideBar/modules/reducer';

export default (state = initialState.votings, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    ...votingNewRecentReducer(state, action),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
