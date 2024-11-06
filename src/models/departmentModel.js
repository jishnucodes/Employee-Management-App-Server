import mongoose from 'mongoose';

const { Schema } = mongoose;

const departmentSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    departmentName: {
        type: String,
        required: true,
    },
    departmentHead: {
        type: Schema.Types.ObjectId,
        ref: "Employee",
    },
    description: {
        type: String,
        required: true,
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
        default: Date.now,
    },
    createdBy: {
        type: String,
    },
    modifiedBy: {
        type: String,
    }
});

departmentSchema.pre('save', function (next) {
    this.id = this._id.toString()
    next()
})

const Department = mongoose.model("Department", departmentSchema);

export default Department;