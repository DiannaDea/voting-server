import router from 'koa-joi-router';
import AuthController from '../controllers/AuthController';

const { Joi } = router;

const authRouter = router();

authRouter.prefix('/auth');

authRouter.route({
    method: 'post',
    path: '/signup',
    validate: {
        body: {
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
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
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        },
        type: 'json',
    },
    handler: AuthController.signIn,
});

authRouter.route({
    method: 'post',
    path: '/signout',
    handler: AuthController.signOut,
});

export default authRouter;
