const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({

    question:{
        type: String,
        required: true
    },
    imageurl:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: true
    },
    descriptionimageurl:{
        type: String,
        required: false
    },
    category:{
        type: String,
        required: true
    },
    optionA:{
        type: String,
        required: true
    },
    optionB:{
        type: String,
        required: false
    },
    optionC:{
        type: String,
        required: false
    },
    optionD:{
        type: String,
        required: false
    },
    correctOption:{
        type: String,
        required: false
    },
    Rating:{
        type: Number,
        required: false
    }
})

module.exports = mongoose.model("TaskModel", TaskSchema);