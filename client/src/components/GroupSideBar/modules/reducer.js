import initialState from '../../../store/initialState';
import {
  GET_USER_GROUPS_INIT,
  GET_USER_GROUPS_SUCCESS,
  GET_USER_GROUPS_ERROR,
  CHANGE_CURRENT_GROUP,
} from './types';

export default (state = initialState.groups, action) => {
  switch (action.type) {
    case GET_USER_GROUPS_INIT:
      return {
        ...state,
        isFetching: true,
      };
    case GET_USER_GROUPS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchData: {
          all: action.payload,
          curGroupId: action.payload[0]._id,
        },
        error: null,
      };
    case GET_USER_GROUPS_ERROR:
      return {
        ...state,
        isFetching: false,
        fetchData: null,
        error: action.payload,

      };
    case CHANGE_CURRENT_GROUP:
      return {
        ...state,
        fetchData: {
          all: state.fetchData.all,
          curGroupId: action.payload.newCurGroupId,
        },
      };
    default:
      return state;
  }
};
