import authRouter from './auth';
import groupsRouter from './groups';
import usersRouter from './users';
import votingsRouter from './votings';
import candidatesRouter from './candidates';

export default [
    authRouter.middleware(),
    groupsRouter.middleware(),
    usersRouter.middleware(),
    votingsRouter.middleware(),
    candidatesRouter.middleware(),
];
