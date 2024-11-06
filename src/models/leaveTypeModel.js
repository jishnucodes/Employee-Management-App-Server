import mongoose from 'mongoose';

const { Schema } = mongoose;

const leaveTypeSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    typeName: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    remarks: {
        type: String,
        required: true,
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

leaveTypeSchema.pre('save', function (next) {
    this.id = this._id.toString()
    next()
});

const LeaveType = mongoose.model("LeaveType", leaveTypeSchema);

export default LeaveType;