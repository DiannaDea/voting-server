import router from 'koa-joi-router';
import UsersController from '../controllers/UserController';
import GroupsController from '../controllers/GroupsController';

const usersRouter = router();
const { Joi } = router;

usersRouter.prefix('/api/users');

usersRouter.use('/:userId/groups', UsersController.userExists);

usersRouter.route({
    method: 'get',
    path: '/:userId/groups',
    validate: {
        params: {
            userId: Joi.string().required(),
        },
    },
    handler: UsersController.getGroups,
});

usersRouter.use('/:userId/groups/:groupId', GroupsController.groupExists);

usersRouter.route({
    method: 'post',
    path: '/:userId/groups/:groupId',
    validate: {
        params: {
            groupId: Joi.string(),
            userId: Joi.string(),
        },
        body: {
            isAdmin: Joi.boolean(),
        },
        type: 'json',
    },
    handler: UsersController.joinGroup,
});

usersRouter.route({
    method: 'put',
    path: '/:userId/groups/:groupId',
    validate: {
        params: {
            userId: Joi.string().required(),
            groupId: Joi.string().required(),
        },
    },
    handler: UsersController.leaveGroup,
});

usersRouter.route({
    method: 'get',
    path: '/',
    validate: {
        query: {
            email: Joi.string().email(),
        },
    },
    handler: UsersController.get,
});

export default usersRouter;
