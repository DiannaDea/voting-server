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
});

const UserGroup = mongoose.model('UserGroup', UserGroupSchema);

export default UserGroup;
