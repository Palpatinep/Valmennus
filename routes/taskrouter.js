const express = require("express");
const app = express();
const router = express.Router();
const Task = require("../models/TaskModel");
const bodyParser = require('body-parser');
const UserModel = require("../models/UserModel");
const AnswerModel = require("../models/AnswerModel");

router.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

router.get("/", async (req, res) =>
{
    res.redirect("/tehtavat/kaikki");
})

router.get("/kaikki", async (req, res) => 
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
        Task: allTasks[rnd],
        rnd: rnd
    });
})

router.get("/valioliiga", async (req, res) =>
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

    const valioliigaTasks = await Task.find({category: "Valioliiga"});
    var rnd = Math.floor(Math.random() * valioliigaTasks.length);

    res.render("taskview/index.ejs", 
    {
        loggedin: loggedin,
        Task: valioliigaTasks[rnd],
        rnd: rnd
    });
})

router.get("/laliga", async (req, res) =>
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

    const laligaTasks = await Task.find({category: "La Liga"});
    var rnd = Math.floor(Math.random() * laligaTasks.length);

    res.render("taskview/index.ejs", 
    {
        loggedin: loggedin,
        Task: laligaTasks[rnd],
        rnd: rnd
    });
})

router.get("/bundesliga", async (req, res) =>
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

    const bundesligaTasks = await Task.find({category: "Bundesliga"});
    var rnd = Math.floor(Math.random() * bundesligaTasks.length);

    res.render("taskview/index.ejs", 
    {
        loggedin: loggedin,
        Task: bundesligaTasks[rnd],
        rnd: rnd
    });
})

router.get("/seriea", async (req, res) =>
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

    const serieaTasks = await Task.find({category: "Serie A"});
    var rnd = Math.floor(Math.random() * serieaTasks.length);

    res.render("taskview/index.ejs", 
    {
        loggedin: loggedin,
        Task: serieaTasks[rnd],
        rnd: rnd
    });
})

router.post("/kaikki", async (req, res) =>
{
    console.log("YYYYYYYYYYYYYYYYYY")
    // const correctquestion = await Task.find({_id: req.body.questionidlabel});

    // if(correctquestion[0].correctAnswer == req.body.questionchoice)
    // {
    //     console.log("Correct Answer")
    // }
    // else
    // {
    //     console.log("Wrong Answer")
    // }
})

router.post('/answers', async (req, res) =>
{
    const correctquestion = await Task.find({_id: req.body.questionid});

    if(correctquestion[0].correctAnswer == req.body.answer)
    {
        console.log("Correct Answer")
        
        const newAnswer = new AnswerModel({
            questionid: req.body.questionid,
            userid: req.user.id,
            result: "Correct",
            date: new Date().toString()
        });
        await newAnswer.save();
    }
    else
    {
        console.log("Wrong Answer")

        const newAnswer = new AnswerModel({
            questionid: req.body.questionid,
            userid: req.user.id,
            questionCategory: correctquestion.category,
            result: "Wrong",
            date: new Date().toString()
        });
        await newAnswer.save();
    }
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

module.exports = router;