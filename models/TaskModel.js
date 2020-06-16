const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({

    question:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    correctAnswer:{
        type: String,
        required: true
    },
    wrongAnswer1:{
        type: String,
        required: false
    },
    wrongAnswer2:{
        type: String,
        required: false
    },
    wrongAnswer3:{
        type: String,
        required: false
    }
})

module.exports = mongoose.model("TaskModel", TaskSchema);