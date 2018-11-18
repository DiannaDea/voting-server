import {
  GET_VOTING_RESULTS_INIT,
  GET_VOTING_RESULTS_SUCCESS,
  GET_VOTING_RESULTS_ERROR,
} from './types';

export default (state, action) => ({
  [GET_VOTING_RESULTS_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_VOTING_RESULTS_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    results: action.payload,
    error: null,
  }),
  [GET_VOTING_RESULTS_ERROR]: () => ({
    ...state,
    isFetching: false,
    results: {},
    error: action.payload,
  }),
});
