import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  getOneVotingSuccess,
  getOneVotingError,
} from '../../routes/VotingItem/modules/actions';

export default function* getOneVoting({ payload }) {
  const { id } = payload;

  try {
    const voting = yield call(axios, {
      url: `${BASE_URL}/votings/${id}`,
      method: 'GET',
    });

    const votingRes = (voting.data === '')
      ? null
      : voting.data;

    console.log('HERE DIANA', votingRes);

    yield put(getOneVotingSuccess(votingRes));
  } catch (error) {
    yield put(getOneVotingError(error));
  }
}
