import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: "Role",
    },
    active: {
        type: Boolean,
        default: true,
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
    },
    modifiedBy: {
        type: String,
    }
});

const User = mongoose.model('User', userSchema);

export default User;