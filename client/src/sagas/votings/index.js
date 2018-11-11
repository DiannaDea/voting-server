import { takeEvery } from 'redux-saga/effects';
import {
  GET_NEW_VOTINGS_INIT,
  GET_RECENT_VOTINGS_INIT,
} from '../../components/NavSideBar/modules/types';
import {
  GET_ONE_VOTING_INIT,
  GET_VOTING_CANDIDATES_INIT,
  SEND_VOTE_INIT,
} from '../../routes/VotingItem/modules/types';

import getVotingsByState from './getVotinsByState';
import getOneVoting from './getVoting';
import getVotingCandidates from './getVotingCandidates';
import sendVote from './sendVote';

export default function* groups() {
  yield takeEvery(GET_NEW_VOTINGS_INIT, getVotingsByState);
  yield takeEvery(GET_RECENT_VOTINGS_INIT, getVotingsByState);
  yield takeEvery(GET_ONE_VOTING_INIT, getOneVoting);
  yield takeEvery(GET_VOTING_CANDIDATES_INIT, getVotingCandidates);
  yield takeEvery(SEND_VOTE_INIT, sendVote);
}
