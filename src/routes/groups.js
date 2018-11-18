import router from 'koa-joi-router';
import GroupsController from '../controllers/GroupsController';

const groupsRouter = router();
const { Joi } = router;

groupsRouter.prefix('/api/groups');

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
    },
    handler: GroupsController.create,
});

groupsRouter.route({
    method: 'get',
    path: '/:groupId/users',
    validate: {
        params: {
            groupId: Joi.string().required(),
        },
    },
    handler: GroupsController.getUsers,
});

groupsRouter.route({
    method: 'get',
    path: '/:groupId/users/:userId/votings',
    validate: {
        params: {
            groupId: Joi.string().required(),
            userId: Joi.string().required(),
        },
        query: {
            state: Joi.string().required().valid('new', 'recent'),
        },
    },
    handler: GroupsController.getVotingsByVoteState,
});

export default groupsRouter;
