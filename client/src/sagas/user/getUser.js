import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  getUserSuccess,
  getUserError,
} from '../../routes/LoginForm/modules/actions';

export default function* getUser({ payload }) {
  const { email } = payload;

  const defaultEmail = (email === '1') ? 'test3@test.test' : email;

  try {
    const user = yield call(axios, {
      url: `${BASE_URL}/users?email=${defaultEmail}`,
      method: 'GET',
    });

    yield put(getUserSuccess(user.data));
  } catch (error) {
    yield put(getUserError(error));
  }
}
