import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  getUserGroupsSuccess,
  getUserGroupsError,
} from '../../components/GroupSideBar/modules/actions';

export default function* getUserGroups({ payload }) {
  const { userId } = payload;

  try {
    const groups = yield call(axios, {
      url: `${BASE_URL}/users/${userId}/groups`,
      method: 'GET',
    });

    yield put(getUserGroupsSuccess(groups.data));
  } catch (error) {
    yield put(getUserGroupsError(error));
  }
}
