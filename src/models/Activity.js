import mongoose from 'mongoose';

const { Schema } = mongoose;

const ActivitySchema = Schema({
    _id: Schema.Types.ObjectId,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Schema.Types.Date,
        required: true,
    },
    ip: {
        type: Schema.Types.String,
        required: true,
    },
    browser: {
        type: Schema.Types.String,
        required: true,
    },
    os: {
        type: Schema.Types.String,
        required: true,
    },
});

const Activity = mongoose.model('Activity', ActivitySchema);

export default Activity;
