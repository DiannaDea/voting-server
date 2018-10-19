import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = Schema({
    _id: Schema.Types.ObjectId,
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    firstName: {
        type: Schema.Types.String,
        required: true,
    },
    lastName: {
        type: Schema.Types.String,
        required: true,
    },
    nickname: {
        type: Schema.Types.String,
        required: true,
    },
});

const User = mongoose.model('User', UserSchema);

export default User;
