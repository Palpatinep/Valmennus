const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({

    questionid:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: false
    },
    questionCategory:{
        type: String,
        required: false
    },
    result:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: false
    },
    answerTime:{
        type: Number,
        required: false
    }
})

module.exports = mongoose.model("AnswerModel", AnswerSchema);