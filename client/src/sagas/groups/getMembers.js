import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  getMembersSuccess,
  getMembersError,
} from '../../routes/GroupMembers/modules/actions';

export default function* getMembers({ payload }) {
  const { groupId } = payload;

  try {
    const members = yield call(axios, {
      url: `${BASE_URL}/groups/${groupId}/users`,
      method: 'GET',
    });

    const membersRes = (members === '')
      ? []
      : members.data;

    yield put(getMembersSuccess(membersRes));
  } catch (error) {
    yield put(getMembersError(error));
  }
}
