import authRouter from './auth';
import groupsRouter from './groups';
import usersRouter from './users';

export default [
    authRouter.middleware(),
    groupsRouter.middleware(),
    usersRouter.middleware(),
];