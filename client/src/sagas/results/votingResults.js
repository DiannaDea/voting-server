import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  getVotingResultsSuccess,
  getVotingResultsError,
} from '../../routes/VotingsList/modules/actions';

export default function* getVotingResults({ payload }) {
  const { votingId } = payload;

  try {
    const results = yield call(axios, {
      url: `${BASE_URL}/votings/${votingId}/results`,
      method: 'GET',
    });

    const resultsRes = (results.data === '')
      ? {}
      : results.data;

    yield put(getVotingResultsSuccess(resultsRes));
  } catch (error) {
    yield put(getVotingResultsError(error));
  }
}
