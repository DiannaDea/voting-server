import {
  GET_NEW_VOTINGS_INIT,
  GET_NEW_VOTINGS_SUCCESS,
  GET_NEW_VOTINGS_ERROR,
  GET_RECENT_VOTINGS_INIT,
  GET_RECENT_VOTINGS_SUCCESS,
  GET_RECENT_VOTINGS_ERROR,
} from './types';
import {
  ADD_VOTING_INIT,
  ADD_VOTING_SUCCESS,
  ADD_VOTING_ERROR,
  ADD_CANDIDATES_INIT,
  ADD_CANDIDATES_SUCCESS,
  ADD_CANDIDATES_ERROR,
} from '../../../routes/VotingForm/modules/types';

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
      ...state.fetchData,
      new: action.payload,
      recent: state.fetchData.recent || [],
    },
    error: null,
  }),
  [GET_NEW_VOTINGS_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      new: null,
      recent: state.fetchData.recent || [],

    },
    error: action.payload,
  }),
  [GET_RECENT_VOTINGS_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      recent: action.payload,
      new: state.fetchData.new || [],
    },
    error: null,
  }),
  [GET_RECENT_VOTINGS_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      recent: null,
      new: state.fetchData.new || [],
    },
    error: action.payload,
  }),
  [ADD_VOTING_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [ADD_VOTING_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        data: action.payload,
        candidates: [],
      },
    },
    error: null,
  }),
  [ADD_VOTING_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        ...state.fetchData.lastVoting,
      },
    },
    error: action.payload,
  }),
  [ADD_CANDIDATES_INIT]: () => ({
    ...state,
    isFetching: true,
  }),
  [ADD_CANDIDATES_SUCCESS]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        ...state.fetchData.lastVoting,
        candidates: action.payload,
      },
      new: [
        ...state.fetchData.new,
        {
          ...state.fetchData.lastVoting.data,
          candidates: action.payload,
        },
      ],
    },
    error: null,
  }),
  [ADD_CANDIDATES_ERROR]: () => ({
    ...state,
    isFetching: false,
    fetchData: {
      ...state.fetchData,
      lastVoting: {
        ...state.fetchData.lastVoting,
      },
    },
    error: action.payload,
  }),
});
