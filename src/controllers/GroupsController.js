import mongoose from 'mongoose';

import Group from '../models/Group';
import UserGroup from '../models/UserGroup';
import MailService from '../services/mail';

const { HOST, PORT } = process.env;

export default class GroupsController {
    static async create(ctx) {
        const { name, adminEmail, membersEmails } = ctx.request.body;

        try {
            const group = await Group.create({
                _id: new mongoose.Types.ObjectId(),
                name,
            });

            const emails = [adminEmail, ...membersEmails];

            await Promise.all(emails.map(async (email) => {
                let linkToJoin = `http://${HOST}:${PORT}/auth/signup?group=${group._id}&email=${email}`;

                if (email === adminEmail) {
                    linkToJoin += '&isAdmin=true';
                }

                await MailService.sendEmail({
                    to: email,
                    subject: 'You’re invited to join VoteApp',
                    text: linkToJoin,
                });
            }));

            return ctx.send(200);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async addUser(ctx) {
        const { groupId, userId } = ctx.params;
        const { isAdmin } = ctx.request.body;

        try {
            const userGroup = await UserGroup.create({
                _id: new mongoose.Types.ObjectId(),
                groupId,
                userId,
                isAdmin,
            });

            return (userGroup) ? ctx.send(200) : ctx.send(400);
        } catch (error) {
            return ctx.send(500, error);
        }
    }
}
