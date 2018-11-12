import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  createGroupSuccess,
  createGroupError,
} from '../../routes/CreateGroupForm/modules/actions';

export default function* createGroup({ payload }) {
  try {
    const groups = yield call(axios, {
      url: `${BASE_URL}/groups`,
      method: 'POST',
      data: payload,
    });

    yield put(createGroupSuccess(groups.data));
  } catch (error) {
    yield put(createGroupError(error));
  }
}
