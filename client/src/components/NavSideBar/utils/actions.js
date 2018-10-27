import {
    GET_NEW_VOTINGS_INIT,
    GET_NEW_VOTINGS_SUCCESS,
    GET_NEW_VOTINGS_ERROR,
    GET_RECENT_VOTINGS_INIT,
    GET_RECENT_VOTINGS_SUCCESS,
    GET_RECENT_VOTINGS_ERROR,
} from './actionTypes';

export const getNewVotingsInit = (userId, groupId, state = 'new') => ({
    type: GET_NEW_VOTINGS_INIT,
    payload: {
        userId, groupId, state,
    },
});

export const getNewVotingsSuccess = votings => ({
    type: GET_NEW_VOTINGS_SUCCESS,
    payload: [
        ...votings,
    ],
});

export const getNewVotingsError = error => ({
    type: GET_NEW_VOTINGS_ERROR,
    payload: {
        error,
    },
});

export const getRecentVotingsInit = (userId, groupId, state = 'recent') => ({
    type: GET_RECENT_VOTINGS_INIT,
    payload: {
        userId, groupId, state,
    },
});

export const getRecentVotingsSuccess = votings => ({
    type: GET_RECENT_VOTINGS_SUCCESS,
    payload: [
        ...votings,
    ],
});

export const getRecentVotingsError = error => ({
    type: GET_RECENT_VOTINGS_ERROR,
    payload: {
        error,
    },
});
