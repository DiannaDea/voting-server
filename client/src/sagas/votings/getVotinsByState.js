import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
    getNewVotingsSuccess,
    getNewVotingsError,
    getRecentVotingsSuccess,
    getRecentVotingsError,
} from '../../components/NavSideBar/utils/actions';

export default function* getVotingsByState({ payload }) {
    const { groupId, userId, state } = payload;

    try {
        const votings = yield call(axios, {
            url: `${BASE_URL}/groups/${groupId}/users/${userId}/votings?state=${state}`,
            method: 'GET',
        });

        const voringsRes = (votings.data === '')
            ? []
            : votings.data;

        (state === 'new')
            ? yield put(getNewVotingsSuccess(voringsRes))
            : yield put(getRecentVotingsSuccess(voringsRes));
    } catch (error) {
        (state === 'new')
            ? yield put(getNewVotingsError(error))
            : yield put(getRecentVotingsError(error));
    }
}
