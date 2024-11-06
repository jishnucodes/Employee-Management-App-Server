import mongoose from "mongoose";
import { enumObj } from "../utils/enumObj.js";

const { Schema } = mongoose;

const holidaySchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Date,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    holidayType: {
        type: String,
        enum: enumObj.holiday_type,
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

holidaySchema.pre('save', function (next) {
    this.id = this._id.toString();
    next();
});

const Holidays = mongoose.model("Holidays", holidaySchema);

export default Holidays;