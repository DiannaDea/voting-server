import {
  GET_ONE_VOTING_INIT,
  GET_ONE_VOTING_SUCCESS,
  GET_ONE_VOTING_ERROR,
} from './types';

export const getOneVotingInit = payload => ({
  type: GET_ONE_VOTING_INIT,
  payload,
});

export const getOneVotingSuccess = payload => ({
  type: GET_ONE_VOTING_SUCCESS,
  payload,
});

export const getOneVotingError = payload => ({
  type: GET_ONE_VOTING_ERROR,
  payload,
});
