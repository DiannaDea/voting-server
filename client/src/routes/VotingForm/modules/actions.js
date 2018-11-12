import {
  ADD_VOTING_INIT,
  ADD_VOTING_SUCCESS,
  ADD_VOTING_ERROR,
  ADD_CANDIDATES_INIT,
  ADD_CANDIDATES_SUCCESS,
  ADD_CANDIDATES_ERROR,
} from './types';

export const addVotingInit = payload => ({
  type: ADD_VOTING_INIT,
  payload,
});

export const addVotingSuccess = payload => ({
  type: ADD_VOTING_SUCCESS,
  payload,
});

export const addVotingError = payload => ({
  type: ADD_VOTING_ERROR,
  payload,
});

export const addCandidatesInit = payload => ({
  type: ADD_CANDIDATES_INIT,
  payload,
});

export const addCandidatesSuccess = payload => ({
  type: ADD_CANDIDATES_SUCCESS,
  payload,
});

export const addCandidatesError = payload => ({
  type: ADD_CANDIDATES_ERROR,
  payload,
});
