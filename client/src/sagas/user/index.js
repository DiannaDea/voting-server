import { takeEvery } from 'redux-saga/effects';
import { SIGN_IN_INIT } from '../../routes/LoginForm/modules/types';
import signIn from './signIn';

export default function* groups() {
  yield takeEvery(SIGN_IN_INIT, signIn);
}
