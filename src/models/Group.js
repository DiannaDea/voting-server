import mongoose from 'mongoose';

const { Schema } = mongoose;

const GroupSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: Schema.Types.String,
        required: true,
    },
});

const Group = mongoose.model('Group', GroupSchema);

export default Group;
