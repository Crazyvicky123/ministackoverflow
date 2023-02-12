const mongoose =require("mongoose");

const answerSchema = new mongoose.Schema({
    questionid:{
        type:String,
        required:true,
    },
    answer:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
});
const Answer = new mongoose.model("Answer",answerSchema);

module.exports = Answer;
