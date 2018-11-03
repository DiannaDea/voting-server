import {
  GET_USER_GROUPS_INIT,
  GET_USER_GROUPS_SUCCESS,
  GET_USER_GROUPS_ERROR,
  CHANGE_CURRENT_GROUP,
} from './types';

export default (state, action) => ({
  [GET_USER_GROUPS_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_USER_GROUPS_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      all: action.payload,
      curGroupId: action.payload[0]._id,
    },
    error: null,
  }),
  [GET_USER_GROUPS_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      all: [],
      curGroupId: null,
    },
    error: action.payload,
  }),
  [CHANGE_CURRENT_GROUP]: () => ({
    ...state,
    fetchData: {
      all: state.fetchData.all,
      curGroupId: action.payload.newCurGroupId,
    },
  }),
});
