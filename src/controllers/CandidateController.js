import mongoose from 'mongoose';

import Candidate from '../models/Candidate';
import Voting from '../models/Voting';
import errors from '../errors';

const candidateErrors = errors.candidates;

export default class CandidateController {
    static async create(ctx) {
        const candidateParams = ctx.request.body;

        try {
            const candidate = await Candidate.create({
                _id: new mongoose.Types.ObjectId(),
                ...candidateParams,
            });

            return (candidate)
                ? ctx.send(200, candidate)
                : ctx.send(400, candidateErrors.unableToCreate);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async createMany(ctx) {
        const { candidates } = ctx.request.body;

        try {
            const candidatesCreated = await Promise.all(candidates.map(candidate => (Candidate.create({
                _id: new mongoose.Types.ObjectId(),
                ...candidate,
            }))));

            return (candidatesCreated && candidatesCreated.length)
                ? ctx.send(200, candidatesCreated)
                : ctx.send(400, candidateErrors.unableToCreateMany);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async get(ctx) {
        const { candidateId } = ctx.params;

        try {
            const candidate = await Candidate.findById(candidateId);

            return (candidate)
                ? ctx.send(200, candidate)
                : ctx.send(204);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async update(ctx) {
        const { candidateId } = ctx.params;
        const candidateParamsUpd = ctx.request.body;

        try {
            const candidateUpd = await Candidate.findByIdAndUpdate(candidateId, candidateParamsUpd);

            if (candidateUpd) {
                const candidate = await Candidate.findById(candidateId);
                return ctx.send(200, candidate);
            }
            return ctx.send(400);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async delete(ctx) {
        const { candidateId } = ctx.params;

        try {
            const candidate = await Candidate.findById(candidateId);
            const voting = await Voting.findById(candidate.votingId);

            if (voting && voting.status !== 'pending') {
                await candidate.remove();
                return ctx.send(200);
            }

            return ctx.send(400, candidateErrors.unableToDeleteVotingStarted);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async candidateExists(ctx, next) {
        const { candidateId } = ctx.params;
        const candidate = await Candidate.findById(candidateId);

        if (!candidate) {
            return ctx.send(400, candidateErrors.noSuchId(candidateId));
        }
        return next();
    }
}
