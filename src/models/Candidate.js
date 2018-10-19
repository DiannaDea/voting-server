import mongoose from 'mongoose';

const { Schema } = mongoose;

const CandidateSchema = Schema({
    _id: Schema.Types.ObjectId,
    votingId: {
        type: Schema.Types.ObjectId,
        ref: 'Voting',
    },
    name: {
        type: Schema.Types.String,
        required: true,
    },
    description: Schema.Types.String,
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

export default Candidate;
