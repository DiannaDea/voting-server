import {
  SIGN_IN_INIT,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from './types';

export default (state, action) => ({
  [SIGN_IN_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [SIGN_IN_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      token: action.payload.token,
    },
    error: null,
  }),
  [SIGN_IN_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        ...state.fetchData.lastVoting,
        token: null,
      },
    },
    error: action.payload,
  }),
});
