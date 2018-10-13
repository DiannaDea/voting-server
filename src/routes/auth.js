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
        output: {
            200: {
                body: {
                    user: {
                        _id: Joi.string(),
                        email: Joi.string(),
                        firstName: Joi.string(),
                        lastName: Joi.string(),
                        nickname: Joi.string(),
                    },
                },
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
    handler: AuthController.signUp,
});

export default authRouter;
