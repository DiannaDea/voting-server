import {
  GET_NEW_VOTINGS_INIT,
  GET_NEW_VOTINGS_SUCCESS,
  GET_NEW_VOTINGS_ERROR,
  GET_RECENT_VOTINGS_INIT,
  GET_RECENT_VOTINGS_SUCCESS,
  GET_RECENT_VOTINGS_ERROR,
} from './types';

export default (state, action) => ({
  [GET_RECENT_VOTINGS_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_NEW_VOTINGS_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [GET_NEW_VOTINGS_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      new: action.payload,
      recent: state.fetchData.recent || [],
    },
    error: null,
  }),
  [GET_NEW_VOTINGS_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      new: null,
      recent: state.fetchData.recent || [],
    },
    error: action.payload,
  }),
  [GET_RECENT_VOTINGS_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      recent: action.payload,
      new: state.fetchData.new || [],
    },
    error: null,
  }),
  [GET_RECENT_VOTINGS_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      recent: null,
      new: state.fetchData.new || [],
    },
    error: action.payload,
  }),
});
