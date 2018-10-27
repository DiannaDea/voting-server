import {
    GET_USER_GROUPS_INIT, GET_USER_GROUPS_ERROR, GET_USER_GROUPS_SUCCESS, CHANGE_CURRENT_GROUP,
} from './actionTypes';

export const getUserGroupsInit = userId => ({
    type: GET_USER_GROUPS_INIT,
    payload: {
        userId,
    },
});

export const getUserGroupsSuccess = userGroups => ({
    type: GET_USER_GROUPS_SUCCESS,
    payload: [
        ...userGroups,
    ],
});

export const getUserGroupsError = error => ({
    type: GET_USER_GROUPS_ERROR,
    payload: {
        error,
    },
});

export const changeCurrentGroup = newCurGroupId => ({
    type: CHANGE_CURRENT_GROUP,
    payload: {
        newCurGroupId,
    },
});
