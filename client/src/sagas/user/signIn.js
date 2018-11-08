import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  signInSuccess,
  signInError,
} from '../../routes/LoginForm/modules/actions';

export default function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const token = yield call(axios, {
      url: `${BASE_URL}/auth/signin`,
      method: 'POST',
      data: {
        email,
        password,
      },
    });

    localStorage.setItem('token', token.data.token);

    yield put(signInSuccess(token.data));
  } catch (error) {
    yield put(signInError(error));
  }
}
