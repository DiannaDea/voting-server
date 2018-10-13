import router from 'koa-joi-router';
import GroupsController from '../controllers/GroupsController';

const groupsRouter = router();
const { Joi } = router;

groupsRouter.prefix('/groups');

groupsRouter.route({
    method: 'post',
    path: '/',
    validate: {
        body: {
            name: Joi.string(),
            adminEmail: Joi.string(),
            membersEmails: Joi.array(),
        },
        type: 'json',
        output: {
            200: {
                body: {
                    text: Joi.string(),
                },
            },
            400: {
                body: {
                    error: Joi.object(),
                },
            },
        },
    },
    handler: GroupsController.create,
});

groupsRouter.route({
    method: 'post',
    path: '/:groupId/users/:userId',
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
    handler: GroupsController.addUser,
});

export default groupsRouter;
