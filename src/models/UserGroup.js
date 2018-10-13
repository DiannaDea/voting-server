import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserGroupSchema = Schema({
    _id: Schema.Types.ObjectId,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    groupId: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
    },
    isAdmin: {
        type: Schema.Types.Boolean,
    },
    dateStart: {
        type: Schema.Types.Date,
        default: Date.now(),
    },
    dateEnd: {
        type: Schema.Types.Date,
    },
});

const UserGroup = mongoose.model('UserGroup', UserGroupSchema);

export default UserGroup;
