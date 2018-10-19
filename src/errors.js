const errors = {
    users: {
        notExist: 'No user',
        noSuchId: userId => `No user with such id ${userId}`,
        unableToJoinGroup: 'Unable to add user to group',
        unableToLeaveGroup: 'Unable to leave group',
        userIsAlreadyInGroup: 'User is already group member',
    },
    groups: {
        noSuchId: groupId => `No user with such id ${groupId}`,
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
    },
};

export default errors;
