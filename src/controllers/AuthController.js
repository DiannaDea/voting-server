import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import pick from 'lodash.pick';

import User from '../models/User';

export default class AuthController {
    static async signUp(ctx) {
        const {
            email, password, firstName, lastName, nickname,
        } = ctx.request.body;

        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            if (!hash) {
                throw new Error('Unable to generate hash');
            }

            const user = await User.create({
                _id: new mongoose.Types.ObjectId(),
                email,
                firstName,
                lastName,
                nickname,
                password: hash,
            });

            return (user)
                ? ctx.send(200, {
                    user: pick(user, ['_id', 'lastname', 'firstname', 'email']),
                })
                : ctx.send(400, 'Unable to create');
        } catch (error) {
            return ctx.send(500, error);
        }
    }
}
