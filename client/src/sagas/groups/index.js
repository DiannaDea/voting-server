import { takeEvery } from 'redux-saga/effects';

import { GET_USER_GROUPS_INIT } from '../../components/GroupSideBar/modules/types';
import getUserGroups from './getGroups';

import { CREATE_GROUP_INIT } from '../../routes/CreateGroupForm/modules/types';
import createGroup from './createGroup';

export default function* groups() {
  yield takeEvery(GET_USER_GROUPS_INIT, getUserGroups);
  yield takeEvery(CREATE_GROUP_INIT, createGroup);
}
