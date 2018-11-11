import {
  CREATE_GROUP_INIT,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_ERROR,
} from './types';

export const createGroupInit = payload => ({
  type: CREATE_GROUP_INIT,
  payload,
});

export const createGroupSuccess = payload => ({
  type: CREATE_GROUP_SUCCESS,
  payload,
});

export const createGroupError = payload => ({
  type: CREATE_GROUP_ERROR,
  payload,
});
