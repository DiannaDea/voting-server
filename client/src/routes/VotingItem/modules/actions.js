import {
  GET_ONE_VOTING_INIT,
  GET_ONE_VOTING_SUCCESS,
  GET_ONE_VOTING_ERROR,
  GET_VOTING_CANDIDATES_INIT,
  GET_VOTING_CANDIDATES_SUCCESS,
  GET_VOTING_CANDIDATES_ERROR,
  SEND_VOTE_INIT,
  SEND_VOTE_SUCCESS,
  SEND_VOTE_ERROR,
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

export const sendVoteInit = payload => ({
  type: SEND_VOTE_INIT,
  payload,
});

export const sendVoteSuccess = payload => ({
  type: SEND_VOTE_SUCCESS,
  payload,
});

export const sendVoteError = payload => ({
  type: SEND_VOTE_ERROR,
  payload,
});
