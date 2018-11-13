import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  addCandidatesSuccess,
  addCandidatesError,
} from '../../routes/VotingForm/modules/actions';

export default function* addCandidates({ payload }) {
  try {
    const candidates = yield call(axios, {
      url: `${BASE_URL}/candidates/many`,
      method: 'POST',
      data: payload,
    });

    const candidatesRes = (candidates.data === '')
      ? null
      : candidates.data;

    yield put(addCandidatesSuccess(candidatesRes));
  } catch (error) {
    yield put(addCandidatesError(error));
  }
}
