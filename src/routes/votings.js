import router from 'koa-joi-router';
import VotingController from '../controllers/VotingController';

const votingsRouter = router();
const { Joi } = router;

votingsRouter.prefix('/api/votings');

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
                _id: Joi.number().required(),
                name: Joi.string().required(),
                question: Joi.string().required(),
                cost: Joi.number().min(1).max(100).required(),
            })),
        },
        type: 'json',
    },
    handler: VotingController.create,
});

votingsRouter.route({
    method: 'get',
    path: '/recent/:userId',
    validate: {
        params: {
            userId: Joi.string().required(),
        },
    },
    handler: VotingController.getLastVotes,
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

votingsRouter.route({
    method: 'post',
    path: '/:votingId/vote',
    validate: {
        params: {
            votingId: Joi.string().required(),
        },
        body: {
            userId: Joi.string().required(),
            candidateId: Joi.string().required(),
            coefficientValues: Joi.array().items(Joi.object({
                _id: Joi.number().required(),
                value: Joi.number().required(),
            })),
        },
        type: 'json',
    },
    handler: VotingController.vote,
});

votingsRouter.route({
    method: 'get',
    path: '/:votingId/results',
    validate: {
        params: {
            votingId: Joi.string().required(),
        },
    },
    handler: VotingController.getVotingResults,
});

votingsRouter.route({
    method: 'get',
    path: '/:votingId/users/:userId',
    validate: {
        params: {
            votingId: Joi.string().required(),
            userId: Joi.string().required(),
        },
    },
    handler: VotingController.userCanVote,
});

export default votingsRouter;
