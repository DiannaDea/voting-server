// import Router from 'koa-router';
//
// import AuthController from '../controllers/AuthController';
//
// const authRouter = Router({ prefix: '/auth' });
//
// authRouter.post('/signup', AuthController.signUp);
//
// export default authRouter;

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
            email: Joi.string(),
            password: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            nickname: Joi.string(),
        },
        type: 'json',
    },
    handler: AuthController.signUp,
});

export default authRouter;
