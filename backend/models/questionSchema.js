const mongoose =require("mongoose");

const questionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,

    },
    tags:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
});

const Question = new mongoose.model("Question",questionSchema);

module.exports = Question;


