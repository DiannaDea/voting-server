export default {
  createVoting: {
    steps: ['Choose voting topic', 'Set coefficients', 'Add candidates'],
    forms: {
      topicForm: {
        topic: 'Topic',
        votingStart: 'Voting start',
        votingEnd: 'Voting end',
        votersPercent: 'Voters percent',
      },
      weightForm: {
        name: 'Name',
        cost: 'Cost',
        question: 'Question',
      },
      candidatesForm: {
        name: 'Name',
        description: 'Description',
      },
    },
    buttons: {
      back: 'Back',
      next: 'Next',
      finish: 'Finish',
      addWeight: 'Add weight',
      addCandidate: 'Add candidate',
    },
    finishText: 'All steps completed - you are finished',
  },
  header: {
    createVoting: 'Create voting',
    activityTitle: 'Activity',
    accountTitle: 'Account',
    logoutTitle: 'Logout',
  },
  navSideBar: {
    new: 'New votings',
    recent: 'Recent votings',
    all: 'All votings',
    groupMembers: 'Group members',
  },
  groupSideBar: {
    createGroup: 'Create group',
  },
  votingItem: {
    topic: 'Topic',
    votingStart: 'Voting start',
    votingEnd: 'Voting end',
    votersPercent: 'Voters percent',
    buttons: {
      vote: 'Vote',
      closeModal: 'Close',
    },
    vote: {
      candidateText: 'Choose best candidate from the following list',
      weightText: 'Please answer the questions to calculate you vote weight!',
      voteTitle: 'You vote is neccessary for us!',
      enterAnswer: 'Enter you answer',
    },
  },
  signIn: {
    title: 'Sign in',
    createGroup: {
      title: 'Want to create group?',
      link: 'Create now!',
    },
    email: 'Email Address',
    password: 'Password',
    buttonSignIn: 'Sign in',
  },
  createGroup: {
    title: 'Create group',
    signIn: {
      title: 'Have an account?',
      link: 'Sign in!',
    },
    group: 'Group Name',
    adminEmail: 'Admin Email',
    memberEmail: 'MemberEmail',
    buttons: {
      addMember: 'Add member',
      createGroup: 'Create group',
    },
  },
};
