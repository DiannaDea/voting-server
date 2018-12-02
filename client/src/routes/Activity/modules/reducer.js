import {
  GET_AUTH_STAT_INIT,
  GET_AUTH_STAT_SUCCESS,
  GET_AUTH_STAT_FAILURE,
  GET_VOTE_STAT_INIT,
  GET_VOTE_STAT_SUCCESS,
  GET_VOTE_STAT_FAILURE,
} from './types';

export default (state, action) => ({
  [GET_AUTH_STAT_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_AUTH_STAT_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    auth: action.payload,
    error: null,
  }),
  [GET_AUTH_STAT_FAILURE]: () => ({
    ...state,
    isFetching: false,
    auth: [],
    error: action.payload,
  }),
  [GET_VOTE_STAT_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_VOTE_STAT_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    votes: action.payload,
    error: null,
  }),
  [GET_VOTE_STAT_FAILURE]: () => ({
    ...state,
    isFetching: false,
    votes: [],
    error: action.payload,
  }),
});
