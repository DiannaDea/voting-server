import router from 'koa-joi-router';
import UsersController from '../controllers/UserController';

const usersRouter = router();

usersRouter.prefix('/users');

usersRouter.route({
    method: 'get',
    path: '/',
    handler: UsersController.get,
});

export default usersRouter;
