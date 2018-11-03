import {
  GET_ONE_VOTING_INIT,
  GET_ONE_VOTING_SUCCESS,
  GET_ONE_VOTING_ERROR,
  GET_VOTING_CANDIDATES_INIT,
  GET_VOTING_CANDIDATES_SUCCESS,
  GET_VOTING_CANDIDATES_ERROR,
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

export const getVotingCandidatesInit = payload => ({
  type: GET_VOTING_CANDIDATES_INIT,
  payload,
});

export const getVotingCandidatesSuccess = payload => ({
  type: GET_VOTING_CANDIDATES_SUCCESS,
  payload,
});

export const getVotingCandidatesError = payload => ({
  type: GET_VOTING_CANDIDATES_ERROR,
  payload,
});
