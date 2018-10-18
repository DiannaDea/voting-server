import mongoose from 'mongoose';

import User from '../models/User';
import Group from '../models/Group';
import UserGroup from '../models/UserGroup';
import errorMessages from '../errors';

const userErrors = errorMessages.users;

export default class UserController {
    static async get(ctx) {
        try {
            const user = await User.findOne({
                ...ctx.request.query,
            });

            return (user)
                ? ctx.send(200, user)
                : ctx.send(204);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async getGroups(ctx) {
        const { userId } = ctx.params;

        try {
            const userGroups = await UserGroup.find({
                userId,
                dateEnd: {
                    $eq: null,
                },
            });

            const groupIds = userGroups.map(userGr => userGr.groupId);
            const groups = await Group.find({
                _id: {
                    $in: groupIds,
                },
            });

            return (groups.length)
                ? ctx.send(200, groups)
                : ctx.send(204);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async joinGroup(ctx) {
        const { groupId, userId } = ctx.params;
        const { isAdmin } = ctx.request.body;

        try {
            if (await UserGroup.findOne({ groupId, userId })) {
                return ctx.send(400, userErrors.userIsAlreadyInGroup);
            }

            const userGroup = await UserGroup.create({
                _id: new mongoose.Types.ObjectId(),
                groupId,
                userId,
                isAdmin,
            });

            return (userGroup)
                ? ctx.send(200)
                : ctx.send(400, userErrors.unableToJoinGroup);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async leaveGroup(ctx) {
        const { userId, groupId } = ctx.params;

        try {
            const updGroup = await UserGroup.findOneAndUpdate({
                userId, groupId,
            }, {
                dateEnd: Date.now(),
            });

            return (updGroup)
                ? ctx.send(200)
                : ctx.send(400, userErrors.unableToLeaveGroup);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async userExists(ctx, next) {
        const { userId } = ctx.params;
        const user = await User.findById(userId);

        if (!user) {
            return ctx.send(400, userErrors.noSuchId(userId));
        }
        return next();
    }
}
