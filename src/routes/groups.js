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
    },
    handler: GroupsController.create,
});

export default groupsRouter;
