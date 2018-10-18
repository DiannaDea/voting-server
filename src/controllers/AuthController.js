import mongoose from 'mongoose';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import pick from 'lodash.pick';

import User from '../models/User';
import config from '../config';

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
                    user: pick(user, ['_id', 'lastName', 'firstName', 'email']),
                })
                : ctx.send(400, 'Unable to create');
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async signIn(ctx) {
        try {
            return passport.authenticate('local', { session: false }, async (err, user) => {
                if (err || !user) {
                    return ctx.send(400, 'Incorrect email or password');
                }

                await ctx.login(user, { session: false });

                const token = jwt.sign(
                    pick(user, ['_id', 'email', 'username']),
                    config.token.SECRET, {
                        expiresIn: config.token.EXPIRES_IN,
                    },
                );

                return ctx.send(200, { token });
            })(ctx);
        } catch (error) {
            return ctx.send(400, `Unable to login, error: ${error.message}`);
        }
    }

    static async signOut(ctx) {
        try {
            if (!ctx.isAuthenticated()) {
                return ctx.send(400, 'Unable to logout');
            }

            ctx.logout();
            return ctx.send(200);
        } catch (error) {
            return ctx.send(500, error);
        }
    }
}
