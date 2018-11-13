import { takeEvery } from 'redux-saga/effects';

import {
  JOIN_GROUP_INIT,
  CHECK_USER_EXISTS_INIT,
} from '../../routes/SignUp/modules/types';

import joinGroup from './join';
import checkUser from './checkUserExists';


export default function* groups() {
  yield takeEvery(JOIN_GROUP_INIT, joinGroup);
  yield takeEvery(CHECK_USER_EXISTS_INIT, checkUser);
}
