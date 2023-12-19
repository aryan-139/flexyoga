const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema(
    {
        participant_id: {   
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            unique: false
        },
        email: {
            type: String,
            required: true,
            unique: false
        },  
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        enrollments:{
            type: String,
            required: false,
        }
    }
);

const Participant = mongoose.model('participant', participantSchema);
module.exports = Participant;