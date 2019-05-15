import router from 'koa-joi-router';
import AuthController from '../controllers/AuthController';

const { Joi } = router;

const authRouter = router();

authRouter.prefix('/api/auth');

authRouter.route({
    method: 'post',
    path: '/signup',
    validate: {
        body: {
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/),
            firstName: Joi.string().alphanum().min(1).max(30)
                .required(),
            lastName: Joi.string().alphanum().min(1).max(30)
                .required(),
            nickname: Joi.string().alphanum().min(3).max(30)
                .required(),
        },
        type: 'json',
    },
    handler: AuthController.signUp,
});

authRouter.route({
    method: 'post',
    path: '/signin',
    validate: {
        body: {
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/),
            activity: Joi.object({
                date: Joi.date().required(),
                ip: Joi.string().required(),
                browser: Joi.string().required(),
                os: Joi.string().required(),
            }),
        },
        type: 'json',
    },
    handler: AuthController.signIn,
});

authRouter.route({
    method: 'get',
    path: '/activities/:userId',
    validate: {
        params: {
            userId: Joi.string().required(),
        },
    },
    handler: AuthController.getActivity,
});

authRouter.route({
    method: 'post',
    path: '/signout',
    handler: AuthController.signOut,
});

export default authRouter;
