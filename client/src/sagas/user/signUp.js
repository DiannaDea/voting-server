import axios from 'axios/index';
import { put, call } from 'redux-saga/effects';
import { BASE_URL } from '../../constants/index';

import {
  signUpSuccess,
  signUpError,
} from '../../routes/LoginForm/modules/actions';

export default function* signUp({ payload }) {
  try {
    const user = yield call(axios, {
      url: `${BASE_URL}/auth/signup`,
      method: 'POST',
      data: payload,
    });

    yield put(signUpSuccess(user.data));
  } catch (error) {
    yield put(signUpError(error));
  }
}
