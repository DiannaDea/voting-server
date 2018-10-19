import mongoose from 'mongoose';

import Voting from '../models/Voting';
import Candidate from '../models/Candidate';
import User from '../models/User';
import Vote from '../models/Vote';

import errors from '../errors';

const votingErrors = errors.votings;

export default class VotingController {
    static async create(ctx) {
        const votingParams = ctx.request.body;

        try {
            const voting = await Voting.create({
                _id: new mongoose.Types.ObjectId(),
                ...votingParams,
            });

            return (voting)
                ? ctx.send(200, voting)
                : ctx.send(400, votingErrors.unableToCreate);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async get(ctx) {
        const { votingId } = ctx.params;

        try {
            const voting = await Voting.findById(votingId);

            return (voting)
                ? ctx.send(200, voting)
                : ctx.send(204);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async delete(ctx) {
        const { votingId } = ctx.params;
        try {
            const voting = await Voting.findById(votingId);

            if (voting.status === 'pending') {
                return ctx.send(400, votingErrors.unableToDeleteVotingStarted);
            }

            await Candidate.deleteMany({ votingId });
            await voting.remove();

            return (voting)
                ? ctx.send(200, voting)
                : ctx.send(400);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async update(ctx) {
        const { votingId } = ctx.params;
        const updateParams = ctx.request.body;

        try {
            const voting = await Voting.findOneAndUpdate({
                _id: votingId,
            }, updateParams);

            return (voting)
                ? ctx.send(200, voting)
                : ctx.send(400);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async getAllCandidates(ctx) {
        const { votingId } = ctx.params;

        try {
            const candidates = await Candidate.find({ votingId });

            return (candidates)
                ? ctx.send(200, candidates)
                : ctx.send(204);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async vote(ctx) {
        const { votingId } = ctx.params;
        const { userId, candidateId } = ctx.request.body;

        try {
            if (await Vote.findOne({ votingId, userId })) {
                return ctx.send(400, votingErrors.userAlreadyVoted);
            } if (!(await User.findById(userId) || !(await Candidate.findById(candidateId)))) {
                return ctx.send(400);
            }

            const vote = await Vote.create({
                _id: new mongoose.Types.ObjectId(),
                votingId,
                userId,
                candidateId,
            });

            return (vote) ? ctx.send(200) : ctx.send(400);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async votingExists(ctx, next) {
        const { votingId } = ctx.params;
        const voting = await Voting.findById(votingId);

        if (!voting) {
            return ctx.send(400, votingErrors.noSuchId(votingId));
        }
        return next();
    }
}
