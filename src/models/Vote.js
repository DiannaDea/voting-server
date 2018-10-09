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
});

const Vote = mongoose.model('Vote', VoteSchema);

export default Vote;
