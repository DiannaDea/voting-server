import { takeEvery } from 'redux-saga/effects';
import {
  SIGN_IN_INIT,
  GET_USER_INIT,
  SIGN_UP_INIT,
} from '../../routes/LoginForm/modules/types';

import signIn from './signIn';
import getUser from './getUser';
import signUp from './signUp';

export default function* groups() {
  yield takeEvery(SIGN_IN_INIT, signIn);
  yield takeEvery(GET_USER_INIT, getUser);
  yield takeEvery(SIGN_UP_INIT, signUp);
}
