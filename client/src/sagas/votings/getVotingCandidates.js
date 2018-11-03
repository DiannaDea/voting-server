import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  getVotingCandidatesSuccess,
  getVotingCandidatesError,
} from '../../routes/VotingItem/modules/actions';

export default function* getVotingCandidates({ payload }) {
  const { votingId } = payload;

  try {
    const candidates = yield call(axios, {
      url: `${BASE_URL}/votings/${votingId}/candidates`,
      method: 'GET',
    });

    const candidatesRes = (candidates.data === '')
      ? null
      : candidates.data;


    yield put(getVotingCandidatesSuccess(candidatesRes));
  } catch (error) {
    yield put(getVotingCandidatesError(error));
  }
}
