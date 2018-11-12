import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  joinGroupSuccess,
  joinGroupError,
} from '../../routes/SignUp/modules/actions';

export default function* joinGroup({ payload }) {
  const { userId, groupId, isAdmin } = payload;

  try {
    const groups = yield call(axios, {
      url: `${BASE_URL}/users/${userId}/groups/${groupId}`,
      method: 'POST',
      data: { isAdmin },
    });

    yield put(joinGroupSuccess(groups.data));
  } catch (error) {
    yield put(joinGroupError({
      ...error.response.data,
      status: error.response.status,
    }));
  }
}
