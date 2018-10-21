import mongoose from 'mongoose';

const { Schema } = mongoose;

const VoteSchema = Schema({
    _id: Schema.Types.ObjectId,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    votingId: {
        type: Schema.Types.ObjectId,
        ref: 'Voting',
    },
    candidateId: {
        type: Schema.Types.ObjectId,
        ref: 'Candidate',
    },
    dateVoting: {
        type: Schema.Types.Date,
        default: Date.now(),
    },
    coefficientValues: [{
        _id: Schema.Types.Number,
        value: {
            type: Schema.Types.Number,
        },
    }],
});

const Vote = mongoose.model('Vote', VoteSchema);

export default Vote;
