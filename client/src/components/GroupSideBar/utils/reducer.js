import { GET_USER_GROUPS_INIT, GET_USER_GROUPS_SUCCESS, GET_USER_GROUPS_ERROR } from './actionTypes';

const initialState = {
    data: {},
    error: null,
};

export default (state = initialState, action) => {
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
                data: action.payload,
                error: null,
            };
        case GET_USER_GROUPS_ERROR:
            return {
                ...state,
                isFetching: false,
                data: null,
                error: action.payload,

            };
        default:
            return state;
    }
};
