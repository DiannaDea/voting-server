import {
  GET_AUTH_STAT_INIT,
  GET_AUTH_STAT_SUCCESS,
  GET_AUTH_STAT_FAILURE,
  GET_VOTE_STAT_INIT,
  GET_VOTE_STAT_SUCCESS,
  GET_VOTE_STAT_FAILURE,
} from './types';

export const getAuthStatInit = payload => ({
  type: GET_AUTH_STAT_INIT,
  payload,
});

export const getAuthStatSuccess = payload => ({
  type: GET_AUTH_STAT_SUCCESS,
  payload,
});

export const getAuthStatFailure = payload => ({
  type: GET_AUTH_STAT_FAILURE,
  payload,
});

export const getVoteStatInit = payload => ({
  type: GET_VOTE_STAT_INIT,
  payload,
});

export const getVoteStatSuccess = payload => ({
  type: GET_VOTE_STAT_SUCCESS,
  payload,
});

export const getVoteStatFailure = payload => ({
  type: GET_VOTE_STAT_FAILURE,
  payload,
});
