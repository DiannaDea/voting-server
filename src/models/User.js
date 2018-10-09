import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = Schema({
    _id: Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', UserSchema);

export default User;
