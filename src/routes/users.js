import router from 'koa-joi-router';
import UsersController from '../controllers/UserController';

const usersRouter = router();
const { Joi } = router;

usersRouter.prefix('/users');

usersRouter.route({
    method: 'get',
    path: '/',
    validate: {
        body: {
            email: Joi.string().email(),
        },
        type: 'json',
        output: {
            200: {
                body: {
                    user: Joi.object(),
                },
            },
            204: {
                body: {
                    message: Joi.string(),
                },
                500: {
                    body: {
                        error: Joi.object(),
                    },
                },
            },
        },
    },
    handler: UsersController.get,
});

export default usersRouter;
