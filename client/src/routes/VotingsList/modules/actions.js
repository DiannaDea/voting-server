import {
  GET_VOTING_RESULTS_INIT,
  GET_VOTING_RESULTS_SUCCESS,
  GET_VOTING_RESULTS_ERROR,
} from './types';

export const getVotingResultsInit = payload => ({
  type: GET_VOTING_RESULTS_INIT,
  payload,
});

export const getVotingResultsSuccess = payload => ({
  type: GET_VOTING_RESULTS_SUCCESS,
  payload,
});

export const getVotingResultsError = payload => ({
  type: GET_VOTING_RESULTS_ERROR,
  payload,
});
