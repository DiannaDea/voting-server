import mongoose from 'mongoose';

const { Schema } = mongoose;

const VotingCoeffSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    value: {
        type: Schema.Types.Number,
    },
});

const VotingCoeff = mongoose.model('VotingCoeff', VotingCoeffSchema);

export default VotingCoeff;
