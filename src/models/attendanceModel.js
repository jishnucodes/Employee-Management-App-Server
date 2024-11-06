import mongoose from 'mongoose';

const {Schema} = mongoose;

const attendenceSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: "Employee",
    },
    punchIn: {
        type: Date,
        required: true,
    },
    punchOut: {
        type: Date,
        required: true,
    },
    remark: {
        type: String,
    }
})

attendenceSchema.pre('save', function (next) {
    this.id = this._id.toString();
    next();
});

const Attendence = mongoose.model("Attendence", attendenceSchema);

export default Attendence;