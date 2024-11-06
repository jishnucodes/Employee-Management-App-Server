import mongoose from "mongoose";
import { enumObj } from "../utils/enumObj.js";

const { Schema } = mongoose;


const leaveSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: "Employee",
    },
    leaveType: {
        type: Schema.Types.ObjectId,
        ref: "LeaveType",
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: enumObj.leave_status,
        default: "Pending"
    },
    appliedOn: {
        type: Date,
        required: true,
    },
    updatedOn: {
        type: Date,
        required: true,
    }
});

leaveSchema.pre('save', function (next) {
    this.id = this._id.toString();
    next();
});

const Leave = mongoose.model("Leave", leaveSchema);

export default Leave;