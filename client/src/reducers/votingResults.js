import initialState from '../store/initialState';
import resultsReducer from '../routes/VotingsList/modules/reducer';

export default (state = initialState.votingResults, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    ...resultsReducer(state, action),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
