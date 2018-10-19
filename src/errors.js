const errors = {
    users: {
        notExist: 'No user',
        noSuchId: id => `No user with such id ${id}`,
        unableToJoinGroup: 'Unable to add user to group',
        unableToLeaveGroup: 'Unable to leave group',
        userIsAlreadyInGroup: 'User is already group member',
    },
    groups: {
        noSuchId: id => `No user with such id ${id}`,
    },
    auth: {
        generateHashErr: 'Unable to generate hash',
        unableToSignUp: 'Unable to create user',
        incorrectCredentials: 'Incorrect email or password',
        unableToLogout: 'Unable to logout',
        userWithEmailExists: 'User with such email already exists',
    },
    votings: {
        unableToCreate: 'Unable to create voting with such params',
        unableToDeleteVotingStarted: 'Unable to delete because voting is already started',
        noSuchId: id => `No voting with such id ${id}`,
    },
    candidates: {
        unableToCreate: 'Unable to create candidate with such params',
        unableToDeleteVotingStarted: 'Unable to delete because voting is already started',
        noSuchId: id => `No candidate with such id ${id}`,
    },
};

export default errors;
