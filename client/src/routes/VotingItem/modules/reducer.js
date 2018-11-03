import {
  GET_ONE_VOTING_INIT,
  GET_ONE_VOTING_SUCCESS,
  GET_ONE_VOTING_ERROR,
} from './types';

export default (state, action) => ({
  [GET_ONE_VOTING_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_ONE_VOTING_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: action.payload,
    },
    error: null,
  }),
  [GET_ONE_VOTING_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: null,
    },
    error: action.payload,
  }),
});
