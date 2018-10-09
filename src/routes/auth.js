import Router from 'koa-router';

import AuthController from '../controllers/AuthController';

const authRouter = Router({ prefix: '/auth' });

authRouter.post('/signup', AuthController.signUp);

export default authRouter;
