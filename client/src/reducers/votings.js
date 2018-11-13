import initialState from '../store/initialState';
import votingNewRecentReducer from '../components/NavSideBar/modules/reducer';
import votingOneReducer from '../routes/VotingItem/modules/reducer';

export default (state = initialState.votings, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    ...votingNewRecentReducer(state, action),
    ...votingOneReducer(state, action),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
