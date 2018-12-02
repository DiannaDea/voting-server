import mongoose from 'mongoose';
import pick from 'lodash.pick';

import Voting from '../models/Voting';
import Candidate from '../models/Candidate';
import User from '../models/User';
import Vote from '../models/Vote';
import VotingResult from '../models/VotingResults';

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
        const { userId, candidateId, ...voteParams } = ctx.request.body;

        try {
            if (await Vote.findOne({
                votingId,
                userId,
            })) {
                return ctx.send(400, votingErrors.userAlreadyVoted);
            }
            if (!(await User.findById(userId) || !(await Candidate.findById(candidateId)))) {
                return ctx.send(400);
            }

            const vote = await Vote.create({
                _id: new mongoose.Types.ObjectId(),
                votingId,
                userId,
                candidateId,
                ...voteParams,
            });

            return (vote) ? ctx.send(200) : ctx.send(400);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static getVoteValue(coefficients, coeffValues) {
        return coefficients.reduce((prevVoteVal, curCoefficient) => {
            const valueObj = coeffValues.find(val => val._id === curCoefficient._id);
            return (valueObj)
                ? prevVoteVal + (valueObj.value * (curCoefficient.cost / 100))
                : prevVoteVal;
        }, 0);
    }

    static async createVotingResults(votingId) {
        if (await VotingResult.findOne({ votingId })) {
            return null;
        }

        const { coefficients } = await Voting.findById(votingId);

        const candidates = await Candidate.find({
            votingId,
        });

        const candidateResults = await Promise.all(candidates.map(async (candidate) => {
            const votes = await Vote.find({
                votingId,
                candidateId: candidate._id,
            });

            const votesCount = votes.length;

            const votesValue = votes.reduce((prevVotesVal, curVote) => {
                const { coefficientValues } = curVote;
                const voteVal = VotingController.getVoteValue(coefficients, coefficientValues);
                return prevVotesVal + voteVal;
            }, 0);

            return {
                candidateId: candidate._id,
                votesCount,
                votesValue,
            };
        }));

        try {
            return await VotingResult.create({
                _id: new mongoose.Types.ObjectId(),
                votingId,
                results: candidateResults,
            });
        } catch (error) {
            return null;
        }
    }

    static async getVotingResults(ctx) {
        const { votingId } = ctx.params;
        try {
            const votingResults = await VotingResult.findOne({
                votingId,
            });

            if (!votingResults) {
                return ctx.send(204);
            }

            const candidateResults = await Promise.all(votingResults.results.map(async votingRes => ({
                ...pick(votingRes, ['votesCount', 'votesValue']),
                candidate: await Candidate.findById(votingRes.candidateId),
            })));

            const resultsWithCandidates = {
                ...pick(votingResults, ['_id', 'votingId']),
                results: candidateResults,
            };

            return (resultsWithCandidates)
                ? ctx.send(200, resultsWithCandidates)
                : ctx.send(204);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async userCanVote(ctx) {
        const { votingId, userId } = ctx.params;

        try {
            const userVote = await Vote.findOne({
                votingId, userId,
            });

            return (userVote)
                ? ctx.send(200, userVote)
                : ctx.send(204);
        } catch (error) {
            return ctx.send(500, error);
        }
    }

    static async getLastVotes(ctx) {
        const { userId } = ctx.params;

        try {
            const votings = await Vote.find({ userId }).sort({ dateVoting: -1 }).limit(10);

            const votingsRes = await Promise.all(votings.map(async voting => ({
                ...pick(voting, ['_id', 'dateVoting']),
                votingTopic: (await Voting.findById(voting.votingId)).topic,
                candidateName: (await Candidate.findById(voting.candidateId)).name,
            })));

            return (votingsRes && votingsRes.length)
                ? ctx.send(200, votingsRes)
                : ctx.send(204);
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
