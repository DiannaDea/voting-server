import initialState from '../../../store/initialState';
import {
  GET_NEW_VOTINGS_INIT,
  GET_NEW_VOTINGS_SUCCESS,
  GET_NEW_VOTINGS_ERROR,
  GET_RECENT_VOTINGS_INIT,
  GET_RECENT_VOTINGS_SUCCESS,
  GET_RECENT_VOTINGS_ERROR,
} from './types';

export default (state = initialState.votings, action) => {
  switch (action.type) {
    case GET_RECENT_VOTINGS_INIT || GET_NEW_VOTINGS_INIT:
      return {
        ...state,
        isFetching: true,
      };
    case GET_NEW_VOTINGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchData: {
          new: action.payload,
          recent: state.fetchData.recent || [],
        },
        error: null,
      };
    case GET_NEW_VOTINGS_ERROR:
      return {
        ...state,
        isFetching: false,
        fetchData: {
          new: null,
          recent: state.fetchData.recent || [],
        },
        error: action.payload,
      };
    case GET_RECENT_VOTINGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchData: {
          recent: action.payload,
          new: state.fetchData.new || [],
        },
        error: null,
      };
    case GET_RECENT_VOTINGS_ERROR:
      return {
        ...state,
        isFetching: false,
        fetchData: {
          recent: null,
          new: state.fetchData.new || [],
        },
        error: action.payload,
      };
    default:
      return state;
  }
};
