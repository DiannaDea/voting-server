import User from '../models/User';

export default class UserController {
    static async get(ctx) {
        try {
            const user = await User.findOne({
                ...ctx.request.query,
            });

            return (user)
                ? ctx.send(200, user)
                : ctx.send(204, 'No user');
        } catch (error) {
            return ctx.send(500, error);
        }
    }
}
