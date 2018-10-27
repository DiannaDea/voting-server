import {
    GET_USER_GROUPS_INIT,
    GET_USER_GROUPS_SUCCESS,
    GET_USER_GROUPS_ERROR,
    CHANGE_CURRENT_GROUP
} from './actionTypes';

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
                data: {
                    all: action.payload,
                    curGroupId: action.payload[0]._id,
                },
                error: null,
            };
        case GET_USER_GROUPS_ERROR:
            return {
                ...state,
                isFetching: false,
                data: null,
                error: action.payload,

            };
        case CHANGE_CURRENT_GROUP:
            return {
                ...state,
                data: {
                    all: state.data.all,
                    curGroupId: action.payload.newCurGroupId,
                },
            };
        default:
            return state;
    }
};
