import mongoose from 'mongoose';
import config from 'config';

import Group from '../models/Group';
import MailService from '../services/mail';
import errors from '../errors';
import Voting from '../models/Voting';
import Vote from '../models/Vote';

const groupsError = errors.groups;
const { host, port } = config.app;

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
                let linkToJoin = `http://${host}:${port}/auth/signup?group=${group._id}&email=${email}`;

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

    static async getVotingsByVoteState(ctx) {
        const { groupId, userId } = ctx.params;
        const { state } = ctx.query;

        if (state !== 'new' && state !== 'recent') {
            return ctx.send(400, groupsError.incorrectVotingState);
        }

        const votings = await Voting.find({
            groupId,
        });

        try {
            const newVotings = await Promise.all(votings.map(async (voting) => {
                const userVotes = await Vote.find({
                    userId,
                    votingId: voting._id,
                });

                if (state === 'new' && userVotes.length === 0) {
                    return voting;
                } if (state === 'recent' && userVotes.length > 0) {
                    return voting;
                } return null;
            }));

            const newVotingsFiltered = newVotings.filter(voting => voting);

            return (newVotingsFiltered.length)
                ? ctx.send(200, newVotingsFiltered)
                : ctx.send(204);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async groupExists(ctx, next) {
        const { groupId } = ctx.params;
        const group = await Group.findById(groupId);

        if (!group) {
            return ctx.send(400, groupsError.noSuchId(groupId));
        }
        return next();
    }
}
