const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const enrollmentSchema=new Schema(
    {
        enrollment_id: {   
            type: String,
            required: true,
            unique: true
        },
        participant_id: {
            type: String,
            required: true,
        },
        batch_id: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        monthly_fee: {
            type: Number,
            required: true,
        },
    }
);

const Enrollment=mongoose.model('enrollment', enrollmentSchema);
module.exports=Enrollment;