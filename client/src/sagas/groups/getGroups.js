import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import { getUserGroupsSuccess, getUserGroupsError } from '../../components/GroupSideBar/utils/actions';

export default function* getUserGroups({ payload }) {
    try {
        const res = yield call(axios, {
            url: `${BASE_URL}/users/5bc8a8649c3d232278530a48/groups`,
            method: 'GET',
        });

        const { amount } = res.data;
        yield put(getUserGroupsSuccess(amount));
    } catch (error) {
        yield put(getUserGroupsError(error));
    }
}
