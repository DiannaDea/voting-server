import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  checkUserSuccess,
  checkUserError,
} from '../../routes/SignUp/modules/actions';

export default function* checkUserExists({ payload }) {
  const { email } = payload;

  const defaultEmail = (email === '1') ? 'test3@test.test' : email;

  try {
    const user = yield call(axios, {
      url: `${BASE_URL}/users?email=${defaultEmail}`,
      method: 'GET',
    });

    yield put(checkUserSuccess(user.data));
  } catch (error) {
    yield put(checkUserError(error));
  }
}
