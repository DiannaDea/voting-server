import { fork } from 'redux-saga/effects';
import groups from './groups';

export default function* rootSaga() {
    yield fork(groups);
}
