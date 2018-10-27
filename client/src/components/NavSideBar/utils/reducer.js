import {
    GET_NEW_VOTINGS_INIT,
    GET_NEW_VOTINGS_SUCCESS,
    GET_NEW_VOTINGS_ERROR,
    GET_RECENT_VOTINGS_INIT,
    GET_RECENT_VOTINGS_SUCCESS,
    GET_RECENT_VOTINGS_ERROR,
} from './actionTypes';

const initialState = {
    data: {},
    error: null,
};

export default (state = initialState, action) => {
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
                data: {
                    new: action.payload,
                    recent: state.data.recent || [],
                },
                error: null,
            };
        case GET_NEW_VOTINGS_ERROR:
            return {
                ...state,
                isFetching: false,
                data: {
                    new: null,
                    recent: state.data.recent || [],
                },
                error: action.payload,
            };
        case GET_RECENT_VOTINGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: {
                    recent: action.payload,
                    new: state.data.new || [],
                },
                error: null,
            };
        case GET_RECENT_VOTINGS_ERROR:
            return {
                ...state,
                isFetching: false,
                data: {
                    recent: null,
                    new: state.data.new || [],
                },
                error: action.payload,
            };
        default:
            return state;
    }
};
