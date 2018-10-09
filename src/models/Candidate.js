import mongoose from 'mongoose';

const { Schema } = mongoose;

const CandidateSchema = Schema({
    _id: Schema.Types.ObjectId,
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

export default Candidate;
