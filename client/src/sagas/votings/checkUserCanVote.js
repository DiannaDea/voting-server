import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  checkUserCanVoteSuccess,
  checkUserCanVoteError,
} from '../../routes/VotingItem/modules/actions';

export default function* checkUserCanVote({ payload }) {
  const { votingId, userId } = payload;

  try {
    const canUserVote = yield call(axios, {
      url: `${BASE_URL}/votings/${votingId}/users/${userId}`,
      method: 'GET',
    });

    const canUserVoteRes = (canUserVote.data === '')
      ? null
      : canUserVote.data;

    yield put(checkUserCanVoteSuccess(canUserVoteRes));
  } catch (error) {
    yield put(checkUserCanVoteError(error));
  }
}
