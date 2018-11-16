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
      addWeight: 'Add weight',
      addCandidate: 'Add candidate',
    },
  },
};
