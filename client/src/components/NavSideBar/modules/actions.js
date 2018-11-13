import {
  GET_NEW_VOTINGS_INIT,
  GET_NEW_VOTINGS_SUCCESS,
  GET_NEW_VOTINGS_ERROR,
  GET_RECENT_VOTINGS_INIT,
  GET_RECENT_VOTINGS_SUCCESS,
  GET_RECENT_VOTINGS_ERROR,
} from './types';

export const getNewVotingsInit = payload => ({
  type: GET_NEW_VOTINGS_INIT,
  payload: {
    ...payload,
    state: 'new',
  },
});

export const getNewVotingsSuccess = payload => ({
  type: GET_NEW_VOTINGS_SUCCESS,
  payload,
});

export const getNewVotingsError = payload => ({
  type: GET_NEW_VOTINGS_ERROR,
  payload,
});

export const getRecentVotingsInit = payload => ({
  type: GET_RECENT_VOTINGS_INIT,
  payload: {
    ...payload,
    state: 'recent',
  },
});

export const getRecentVotingsSuccess = payload => ({
  type: GET_RECENT_VOTINGS_SUCCESS,
  payload,
});

export const getRecentVotingsError = payload => ({
  type: GET_RECENT_VOTINGS_ERROR,
  payload,
});
