import { takeEvery } from 'redux-saga/effects';

import {
  GET_VOTING_RESULTS_INIT,
} from '../../routes/VotingsList/modules/types';

import votingResults from './votingResults';

export default function* results() {
  yield takeEvery(GET_VOTING_RESULTS_INIT, votingResults);
}
