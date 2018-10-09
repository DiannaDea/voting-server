import mongoose from 'mongoose';

const { Schema } = mongoose;

const GroupSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    votings: [{
        type: Schema.Types.ObjectId,
        ref: 'Voting',
    }],
});

const Group = mongoose.model('Group', GroupSchema);

export default Group;
