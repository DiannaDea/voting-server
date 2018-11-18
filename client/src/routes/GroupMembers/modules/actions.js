import {
  GET_MEMBERS_INIT,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR,
} from './types';

export const getMembersInit = payload => ({
  type: GET_MEMBERS_INIT,
  payload,
});

export const getMembersSuccess = payload => ({
  type: GET_MEMBERS_SUCCESS,
  payload,
});

export const getMembersError = payload => ({
  type: GET_MEMBERS_ERROR,
  payload,
});
