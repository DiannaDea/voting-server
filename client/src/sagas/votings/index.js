import { takeEvery } from 'redux-saga/effects';
import {
    GET_NEW_VOTINGS_INIT,
    GET_RECENT_VOTINGS_INIT,
} from '../../components/NavSideBar/utils/actionTypes';
import getVotingsByState from './getVotinsByState';

export default function* groups() {
    yield takeEvery(GET_NEW_VOTINGS_INIT, getVotingsByState);
    yield takeEvery(GET_RECENT_VOTINGS_INIT, getVotingsByState);
}
