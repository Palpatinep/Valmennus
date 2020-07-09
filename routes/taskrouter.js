const express = require("express");
const app = express();
const router = express.Router();
const Task = require("../models/TaskModel");
const bodyParser = require('body-parser');
const UserModel = require("../models/UserModel");
const AnswerModel = require("../models/AnswerModel");
const TaskModel = require("../models/TaskModel");

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

    res.render("taskview/menu.ejs",
    {
        loggedin: loggedin
    })

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


    if (req.isAuthenticated())
    {
        const NotAvailableTasks = await AnswerModel.find({userid: req.user.id, result: "Correct"})
        const NotAvailableTasksArray = [];
        NotAvailableTasks.forEach(element =>
        {
            NotAvailableTasksArray.push(element.questionid)
        })

        const allTasks = await Task.find({});
        var AllTasksArray = [];
        allTasks.forEach(element =>
        {
            AllTasksArray.push(element._id);
        })

        NotAvailableTasksArray.forEach(element =>
        {
            AllTasksArray = AllTasksArray.filter(task => task._id != element)
        })

        const TaskFind = await TaskModel.find({_id: AllTasksArray});

        var rnd = Math.floor(Math.random() * TaskFind.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: TaskFind[rnd],
            rnd: rnd
        });
    }
    else
    {
        const allTasks = await Task.find({});
        var rnd = Math.floor(Math.random() * allTasks.length);
    
        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: allTasks[rnd],
            rnd: rnd
        });
    }
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

    if (req.isAuthenticated())
    {
        const NotAvailableTasks = await AnswerModel.find({userid: req.user.id, result: "Correct"})
        const NotAvailableTasksArray = [];

        NotAvailableTasks.forEach(element =>
        {
            NotAvailableTasksArray.push(element.questionid)
        })  
        
        const valioliigaTasks = await Task.find({category: "Valioliiga"});
        var valioliigaTasksArray = [];

        valioliigaTasks.forEach(element =>
        {
            valioliigaTasksArray.push(element._id);
        })

        NotAvailableTasksArray.forEach(element =>
        {
            valioliigaTasksArray = valioliigaTasksArray.filter(task => task._id != element)
        })

        const TaskFind = await TaskModel.find({_id: valioliigaTasksArray});

        var rnd = Math.floor(Math.random() * TaskFind.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: TaskFind[rnd],
            rnd: rnd
        });
    }
    else
    {
        const valioliigaTasks = await Task.find({category: "Valioliiga"});
        var rnd = Math.floor(Math.random() * valioliigaTasks.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: valioliigaTasks[rnd],
            rnd: rnd
        });
    }
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

    if (req.isAuthenticated())
    {
        const NotAvailableTasks = await AnswerModel.find({userid: req.user.id, result: "Correct"})
        const NotAvailableTasksArray = [];

        NotAvailableTasks.forEach(element =>
        {
            NotAvailableTasksArray.push(element.questionid)
        })  
        
        const laligaTasks = await Task.find({category: "La Liga"});
        var laligaTasksArray = [];

        laligaTasks.forEach(element =>
        {
            laligaTasksArray.push(element._id);
        })

        NotAvailableTasksArray.forEach(element =>
        {
            laligaTasksArray = laligaTasksArray.filter(task => task._id != element)
        })

        const TaskFind = await TaskModel.find({_id: laligaTasksArray});

        var rnd = Math.floor(Math.random() * TaskFind.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: TaskFind[rnd],
            rnd: rnd
        });
    }
    else
    {
        const laligaTasks = await Task.find({category: "La Liga"});
        var rnd = Math.floor(Math.random() * laligaTasks.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: laligaTasks[rnd],
            rnd: rnd
        });
    }    
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

    if (req.isAuthenticated())
    {
        const NotAvailableTasks = await AnswerModel.find({userid: req.user.id, result: "Correct"})
        const NotAvailableTasksArray = [];

        NotAvailableTasks.forEach(element =>
        {
            NotAvailableTasksArray.push(element.questionid)
        })

        const bundesligaTasks = await Task.find({category: "Bundesliga"});
        var bundesligaTasksArray = [];

        bundesligaTasks.forEach(element =>
        {
            bundesligaTasksArray.push(element._id);
        })

        NotAvailableTasksArray.forEach(element =>
        {
            bundesligaTasksArray = bundesligaTasksArray.filter(task => task._id != element)
        })

        const TaskFind = await Task.find({_id: bundesligaTasksArray});
        var rnd = Math.floor(Math.random() * TaskFind.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: TaskFind[rnd],
            rnd: rnd
        });
    }
    else
    {
        const bundesligaTasks = await Task.find({category: "Bundesliga"});
        var rnd = Math.floor(Math.random() * bundesligaTasks.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: bundesligaTasks[rnd],
            rnd: rnd
        });
    }   
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

    if (req.isAuthenticated())
    {
        const NotAvailableTasks = await AnswerModel.find({userid: req.user.id, result: "Correct"})
        const NotAvailableTasksArray = [];

        NotAvailableTasks.forEach(element =>
        {
            NotAvailableTasksArray.push(element.questionid)
        })  
        
        const serieaTasks = await Task.find({category: "Serie A"});
        var serieaTasksArray = [];

        serieaTasks.forEach(element =>
        {
            serieaTasksArray.push(element._id);
        })

        NotAvailableTasksArray.forEach(element =>
        {
            serieaTasksArray = serieaTasksArray.filter(task => task._id != element)
        })

        const TaskFind = await Task.find({_id: serieaTasksArray});
        var rnd = Math.floor(Math.random() * TaskFind.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: TaskFind[rnd],
            rnd: rnd
        });
    }
    else
    {
        const serieaTasks = await Task.find({category: "Serie A"});
        var rnd = Math.floor(Math.random() * serieaTasks.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: serieaTasks[rnd],
            rnd: rnd
        });
    }    
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
    const correctuser = await UserModel.find({_id: req.user.id});
    const username = correctuser[0].name;
    console.log("AAAAAAAAAAAAAA");
    console.log(username)

    if(correctquestion[0].correctAnswer == req.body.answer)
    {
        console.log("Correct Answer")
        
        const newAnswer = new AnswerModel({
            questionid: req.body.questionid,
            userid: req.user.id,
            username: username,
            result: "Correct",
            date: new Date().toString()
        });
        await newAnswer.save();
        console.log(newAnswer)
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

// async function SearchQuestions(callback, availableTasks)
// {
//     var availableTasks3 = ["asd", "qwe", "wer"];

//     console.log("BEFORE")
//     console.log(availableTasks3)

//     availableTasks.forEach(async function (doc1) {
//         // var doc2 = await TaskModel.findOne({_id: doc1.questionid});

//         // await TaskModel.find({_id: doc1.questionid}).stream()
//         // .on("data", function(doc)
//         // {
//         //     console.log("A")
//         //     console.log(doc)
//         //     availableTasks3.push(doc)
//         // })
//         // .on("error", function(err)
//         // {
//         //     console.log("ERROR")
//         //     console.log(err)
//         //     console.log("ERROR")
//         // })
//         // .on("end", function()
//         // {
//         //     console.log("DONEDONE")
//         // })

//         console.log("OOOOOOOOOOOOOOOOOOO")
//         console.log(doc1)
//         console.log("PPPPPPPPPPPPPPPPPP")
//         console.log(doc1.questionid)
//         console.log("ÅÅÅÅÅÅÅÅÅÅÅÅÅÅÅÅ")
        
//         availableTasks3.push(await TaskModel.find({_id: "5ef27d9a302f4649985c28f6"}));
//         console.log("OOOOOOOOOOOOOOOOOOO")



//         // if (doc2 != null) {
//         //     doc1 = doc2;
//         //     console.log("A")
//         //     console.log(doc2)
//         //     availableTasks3.push(doc2);
//         // }
//     });

//     console.log("AFTER")
//     console.log(availableTasks3)
//     callback();
//     return availableTasks3;
// }


module.exports = router;