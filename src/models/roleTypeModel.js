import mongoose from "mongoose";

const { Schema } = mongoose;

const rolTypeSchema = new Schema({
    roleTypeName: {
        type: String,
        required: true,
    },
    isAdmin: {
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
});

const RoleType = mongoose.model("RoleType", rolTypeSchema);

export default RoleType;