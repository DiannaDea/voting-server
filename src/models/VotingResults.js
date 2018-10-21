import mongoose from 'mongoose';

const { Schema } = mongoose;

const VotingResultsSchema = Schema({
    _id: Schema.Types.ObjectId,
    votingId: {
        type: Schema.Types.ObjectId,
        ref: 'Voting',
    },
    results: [{
        _id: Schema.Types.Number,
        candidateId: {
            type: Schema.Types.ObjectId,
            ref: 'Candidate',
        },
        votesCount: {
            type: Schema.Types.Number,
        },
        votesValue: {
            type: Schema.Types.Number,
        },
    }],
});

const VotingResults = mongoose.model('VotingResults', VotingResultsSchema);

export default VotingResults;
