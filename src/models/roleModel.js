import mongoose from 'mongoose';

const { Schema } = mongoose;

const roleSchema = new Schema({
    roleName: {                               
        type: String,
        required: true,
    },
    roleType: {     
        type: Schema.Types.ObjectId,
        ref: "RoleType"
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

const Role = mongoose.model("Role", roleSchema);

export default Role;