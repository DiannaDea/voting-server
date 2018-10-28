import {
  GET_USER_GROUPS_INIT,
  GET_USER_GROUPS_ERROR,
  GET_USER_GROUPS_SUCCESS,
  CHANGE_CURRENT_GROUP,
} from './types';

export const getUserGroupsInit = payload => ({
  type: GET_USER_GROUPS_INIT,
  payload,
});

export const getUserGroupsSuccess = payload => ({
  type: GET_USER_GROUPS_SUCCESS,
  payload,
});

export const getUserGroupsError = payload => ({
  type: GET_USER_GROUPS_ERROR,
  payload,
});

export const changeCurrentGroup = payload => ({
  type: CHANGE_CURRENT_GROUP,
  payload,
});
