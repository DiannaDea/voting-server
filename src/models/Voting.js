import mongoose from 'mongoose';

const { Schema } = mongoose;

const VotingSchema = Schema({
    _id: Schema.Types.ObjectId,
    topic: {
        type: String,
        required: true,
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    dateStart: {
        type: Schema.Types.Date,
    },
    dateEnd: {
        type: Schema.Types.Date,
    },
    votersPercent: {
        type: Schema.Types.Number,
    },
    candidates: [{
        type: Schema.Types.ObjectId,
        ref: 'Candidate',
    }],
    coefficients: [{
        type: Schema.Types.ObjectId,
        ref: 'VotingCoeff',
    }],
});

const Voting = mongoose.model('Voting', VotingSchema);

export default Voting;
