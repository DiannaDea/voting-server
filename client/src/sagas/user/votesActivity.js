import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  getVoteStatSuccess,
  getVoteStatFailure,
} from '../../routes/Activity/modules/actions';

export default function* getVotesStat({ payload }) {
  const { userId } = payload;

  try {
    const votesStat = yield call(axios, {
      url: `${BASE_URL}/votings/recent/${userId}`,
      method: 'GET',
      data: payload,
    });

    const votesStatRes = (votesStat.data === '')
      ? null
      : votesStat.data;

    yield put(getVoteStatSuccess(votesStatRes));
  } catch (error) {
    yield put(getVoteStatFailure(error));
  }
}
