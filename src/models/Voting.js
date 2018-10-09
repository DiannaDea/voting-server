import mongoose from 'mongoose';

const { Schema } = mongoose;

const VotingSchema = Schema({
    _id: Schema.Types.ObjectId,
    candidates: [{
        type: Schema.Types.ObjectId,
        ref: 'Candidate',
    }],
});

const Voting = mongoose.model('Voting', VotingSchema);

export default Voting;
