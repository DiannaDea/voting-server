import { GET_USER_GROUPS_INIT, GET_USER_GROUPS_SUCCESS, GET_USER_GROUPS_ERROR } from './actionTypes';

const initialState = {
    data: {},
    status: null,
    message: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_GROUPS_INIT:
            return { ...state, isFetching: true };
        case GET_USER_GROUPS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                message: null,
                status: 200,
            };
        case GET_USER_GROUPS_ERROR:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
                data: null,

            };
        default:
            return state;
    }
};
