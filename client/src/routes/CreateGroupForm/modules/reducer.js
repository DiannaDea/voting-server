import {
  CREATE_GROUP_INIT,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_ERROR,
} from './types';

export default (state, action) => ({
  [CREATE_GROUP_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [CREATE_GROUP_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastGroup: action.payload,
    },
    error: null,
  }),
  [CREATE_GROUP_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastGroup: {},
    },
    error: action.payload,
  }),
});
