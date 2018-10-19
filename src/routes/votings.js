import router from 'koa-joi-router';
import VotingController from '../controllers/VotingController';

const votingsRouter = router();
const { Joi } = router;

votingsRouter.prefix('/votings');

votingsRouter.route({
    method: 'post',
    path: '/',
    validate: {
        body: {
            topic: Joi.string().required(),
            groupId: Joi.string().required(),
            creatorId: Joi.string().required(),
            dateStart: Joi.date().required(),
            dateEnd: Joi.date().required(),
            votersPercent: Joi.number().min(1).max(100).required(),
            coefficients: Joi.array().items(Joi.object({
                name: Joi.string().required(),
                question: Joi.string().required(),
                value: Joi.number().min(1).max(100).required(),
            })),
        },
        type: 'json',
    },
    handler: VotingController.create,
});

votingsRouter.use('/:votingId', VotingController.votingExists);

votingsRouter.route({
    method: 'get',
    path: '/:votingId/candidates',
    validate: {
        params: {
            votingId: Joi.string().required(),
        },
    },
    handler: VotingController.getAllCandidates,
});

votingsRouter.route({
    method: 'get',
    path: '/:votingId',
    validate: {
        params: {
            votingId: Joi.string().required(),
        },
    },
    handler: VotingController.get,
});

votingsRouter.route({
    method: 'delete',
    path: '/:votingId',
    validate: {
        params: {
            votingId: Joi.string().required(),
        },
    },
    handler: VotingController.delete,
});

votingsRouter.route({
    method: 'put',
    path: '/:votingId',
    validate: {
        params: {
            votingId: Joi.string().required(),
        },
        body: {
            topic: Joi.string(),
            votersPercent: Joi.number().min(1).max(100),
            status: Joi.string().valid('created', 'pending', 'finished'),
        },
        type: 'json',
    },
    handler: VotingController.update,
});

export default votingsRouter;
