import router from 'koa-joi-router';
import CandidatesController from '../controllers/CandidateController';

const candidatesRoute = router();
const { Joi } = router;

candidatesRoute.prefix('/candidates');

candidatesRoute.route({
    method: 'post',
    path: '/',
    validate: {
        body: {
            votingId: Joi.string().required(),
            name: Joi.string().required(),
            description: Joi.string(),
        },
        type: 'json',
    },
    handler: CandidatesController.create,
});

candidatesRoute.use('/:candidateId', CandidatesController.candidateExists);

candidatesRoute.route({
    method: 'get',
    path: '/:candidateId',
    validate: {
        params: {
            candidateId: Joi.string().required(),
        },
    },
    handler: CandidatesController.get,
});

candidatesRoute.route({
    method: 'delete',
    path: '/:candidateId',
    validate: {
        params: {
            candidateId: Joi.string().required(),
        },
    },
    handler: CandidatesController.delete,
});

candidatesRoute.route({
    method: 'put',
    path: '/:candidateId',
    validate: {
        params: {
            candidateId: Joi.string().required(),
        },
        body: {
            description: Joi.string(),
        },
        type: 'json',
    },
    handler: CandidatesController.update,
});

export default candidatesRoute;
