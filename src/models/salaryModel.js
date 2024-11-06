import mongoose from 'mongoose';

const { Schema } = mongoose;

const salarySchema = new Schema({
    employee: {
        type: Schema.Types.ObjectId,
        ref: "Employee"
    },
    basicSalary: {
        type: Number,
        required: true,
    },
    allowance: {
        type: Number,
        required: true
    },
    deductions: {
        type: Number,
        required: true,
    },
    netSalary: {
        type: Number,
        required: true,
    },
    payDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["paid", "unpaid"],
        required: true,
    },
    remarks: {
        type: String,
        required: true,
    },
    salaryField1: {
        type: String,
    },
    salaryField2: {
        type: String,
    },
    salaryField3: {
        type: String,
    },
    salaryField4: {
        type: String,
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

const Salary = mongoose.model('Salary', salarySchema);

export default Salary;