const express = require("express");
const app = express();
const router = express.Router();
const Task = require("../models/TaskModel");
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

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
    let choiceOrderArr = RandomizeChoices(allTasks[0])

    res.render("taskview/index.ejs", 
    {
        loggedin: loggedin,
        Task: allTasks[0],
        rnd: rnd
    });
})

router.post("/", async (req, res) =>
{
    const correctquestion = await Task.find({_id: req.body.questionid});

    if(correctquestion[0].correctAnswer == req.body.questionchoice)
    {
        console.log("Correct Answer")
    }
    else
    {
        console.log("Wrong Answer")
    }
})

router.post('/answers', async (req, res) =>
{
    console.log(req.body.answer);
    console.log('req received');
 });


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

function RandomizeChoices(RndTask)
{
    let arr = [RndTask.correctAnswer, RndTask.wrongAnswer1, RndTask.wrongAnswer2, RndTask.wrongAnswer3]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


module.exports = router;