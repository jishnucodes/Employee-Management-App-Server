import mongoose from 'mongoose';

const { Schema } = mongoose;

const employeeSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    employeeCode: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    maritalStatus: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: "Department",
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address",
    },
    dateOfJoining: {
        type: Date,
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
        default: Date.now
    },
    createdBy: {
        type: String,
    },
    modifiedBy: {
        type: String,
    }
});

employeeSchema.pre("save", function (next) {
    this.id = this._id.toString()
    next()
})

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;