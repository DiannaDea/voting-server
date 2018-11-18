import {
  GET_MEMBERS_INIT,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR,
} from './types';

export default (state, action) => ({
  [GET_MEMBERS_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_MEMBERS_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    curGroupMembers: action.payload,
    error: null,
  }),
  [GET_MEMBERS_ERROR]: () => ({
    ...state,
    isFetching: false,
    curGroupMembers: [],
    error: action.payload,
  }),
});
