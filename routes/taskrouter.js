const express = require("express");
const app = express();
const router = express.Router();
const Task = require("../models/TaskModel");

router.get("/", async (req, res) =>
{
    let loggedin = false;

    if (req.isAuthenticated())
    {
        loggedin = true;
    }
    else
    {
        loggedin = false;
    }

    const allTasks = await Task.find({});
    var rnd = Math.floor(Math.random() * allTasks.length);

    res.render("taskview/index.ejs", 
    {
        loggedin: loggedin,
        allTasks: allTasks,
        rnd: rnd
    });
})

router.post("/", async (req, res) =>
{
    
    console.log(req.body.questionid)

    const correctquestion = await Task.find({_id: req.body.questionid});

    console.log(correctquestion);

    console.log(req.body.questionchoice);
    console.log(correctquestion[0].correctAnswer);

    if(correctquestion[0].correctAnswer == req.body.questionchoice)
    {
        console.log("Correct Answer")
    }
    else
    {
        console.log("Wrong Answer")
    }

    res.redirect("/tehtavat");



})


router.get("/luo", async (req, res) =>
{
    if (req.isAuthenticated())
    {
        loggedin = true;
    }
    else
    {
        loggedin = false;
    }

    res.render("taskview/create.ejs", 
    {
        loggedin: loggedin
    });
})

router.post("/luo", async (req, res) => 
{
    try
    {
        console.log("try");
        const newTask = new Task({
            question: req.body.question,
            description: req.body.description,
            category: req.body.category,
            correctAnswer: req.body.correctanswer,
            wrongAnswer1: req.body.wronganswer1,
            wrongAnswer2: req.body.wronganswer2,
            wrongAnswer3: req.body.wronganswer3
        })
        await newTask.save();
        console.log("New Question Saved");
        res.redirect("/tehtavat");
    }
    catch
    {
        console.log("FAIL");
        res.redirect("/");
    }
})

module.exports = router;