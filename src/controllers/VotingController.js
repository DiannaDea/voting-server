import mongoose from 'mongoose';

import Voting from '../models/Voting';
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
            const voting = await Voting.findOneAndDelete({
                _id: votingId,
            });

            return (voting)
                ? ctx.send(200, voting)
                : ctx.send(400);
        } catch (error) {
            return ctx.send(500, error);
        }
    }
    static async update(ctx) {

    }
}
