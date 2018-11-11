export default {
  groups: {
    fetchData: {
      all: [],
      curGroupId: '',
      lastGroup: {},
    },
    error: null,
  },
  votings: {
    fetchData: {
      new: [],
      recent: [],
      all: [],
      lastVoting: {
        data: null,
        candidates: [],
      },
    },
    error: null,
  },
  user: {
    fetchData: {
      token: null,
      personalInfo: {},
    },
    error: null,
  },
  joinGroup: {
    userToCheck: {},
    status: null,
    error: null,
  },
};
