import { fork } from 'redux-saga/effects';
import groups from './groups';
import votings from './votings';

export default function* rootSaga() {
  yield fork(groups);
  yield fork(votings);
}
