import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  addVotingSuccess,
  addVotingError,
} from '../../routes/VotingForm/modules/actions';

export default function* addVoting({ payload }) {
  try {
    const voting = yield call(axios, {
      url: `${BASE_URL}/votings`,
      method: 'POST',
      data: payload,
    });

    const votingRes = (voting.data === '')
      ? null
      : voting.data;

    yield put(addVotingSuccess(votingRes));
  } catch (error) {
    yield put(addVotingError(error));
  }
}
