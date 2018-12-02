import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  getAuthStatSuccess,
  getAuthStatFailure,
} from '../../routes/Activity/modules/actions';

export default function* getVotesStat({ payload }) {
  const { userId } = payload;

  try {
    const authStat = yield call(axios, {
      url: `${BASE_URL}/auth/activities/${userId}`,
      method: 'GET',
      data: payload,
    });

    const authStatRes = (authStat.data === '')
      ? null
      : authStat.data;

    yield put(getAuthStatSuccess(authStatRes));
  } catch (error) {
    yield put(getAuthStatFailure(error));
  }
}
