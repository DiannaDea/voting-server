import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  getUserSuccess,
  getUserError,
} from '../../routes/LoginForm/modules/actions';

export default function* getUser({ payload }) {
  const { email } = payload;

  try {
    const user = yield call(axios, {
      url: `${BASE_URL}/users?email=${email}`,
      method: 'GET',
    });

    yield put(getUserSuccess(user.data));
  } catch (error) {
    yield put(getUserError(error));
  }
}
