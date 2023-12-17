const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const batchSchema=new Schema(
    {
        batch_id: {   
            type: String,
            required: true,
            unique: true
        },
        start_time: {
            type: String,
            required: true,
        },
        end_time: {
            type: String,
            required: true,
        }
    }
);

const Batch=mongoose.model('batch', batchSchema);
module.exports=Batch;