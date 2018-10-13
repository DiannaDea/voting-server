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
            name: Joi.string().alphanum().min(1).max(30)
                .required(),
            adminEmail: Joi.string().email(),
            membersEmails: Joi.array(),
        },
        type: 'json',
        output: {
            200: {
                body: {},
            },
            500: {
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
        output: {
            200: {
                body: {},
            },
            400: {
                body: {
                    message: Joi.string(),
                },
            },
            500: {
                body: {
                    error: Joi.object(),
                },
            },
        },
    },
    handler: GroupsController.addUser,
});

export default groupsRouter;
