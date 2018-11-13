import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import omit from 'lodash.omit';
import { BASE_URL } from '../../constants/index';

import {
  sendVoteSuccess,
  sendVoteError,
} from '../../routes/VotingItem/modules/actions';

export default function* sendVote({ payload }) {
  const { votingId } = payload;

  try {
    const vote = yield call(axios, {
      url: `${BASE_URL}/votings/${votingId}/vote`,
      method: 'POST',
      data: {
        ...omit(payload, ['votingId']),
      },
    });

    const voteRes = (vote.data === '')
      ? null
      : vote.data;

    yield put(sendVoteSuccess(voteRes));
  } catch (error) {
    yield put(sendVoteError(error));
  }
}
