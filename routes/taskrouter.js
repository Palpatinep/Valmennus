const express = require("express");
const app = express();
const router = express.Router();
const Task = require("../models/TaskModel");
const bodyParser = require('body-parser');
const UserModel = require("../models/UserModel");
const AnswerModel = require("../models/AnswerModel");
const TaskModel = require("../models/TaskModel");
const { isValidObjectId } = require("mongoose");

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

    res.render("taskview/schoolmenu.ejs",
    {
        loggedin: loggedin
    })

})

router.get("/amk", async (req, res) =>
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

    res.render("taskview/amkmenu.ejs",
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

        console.log("AAAAAAAAAAAAAA")
        console.log(TaskFind[rnd].category)

        var CategoryAnswers = [];

        if(TaskFind[rnd].category == "Päätöksentekotaidot")
        {
            console.log("AAAAAA Valio")
            const answers = await AnswerModel.find({userid: req.user.id})

            CategoryAnswers = answers.filter(function (el){
                return el.questionCategory == "Päätöksentekotaidot"
            })
            var correctAnswers = 0;
            var wrongAnswers = 0;

            for (var i=0; i < CategoryAnswers.length; i++) {
                if (CategoryAnswers[i].result === "Correct") {
                    correctAnswers += 1;
                }
                else if (CategoryAnswers[i].result === "Wrong")
                {
                    wrongAnswers += 1;
                }
            }
        }
        else if(TaskFind[rnd].category == "Matematiikka")
        {
            console.log("AAAAAA La")

            const answers = await AnswerModel.find({userid: req.user.id})

            CategoryAnswers = answers.filter(function (el){
                return el.questionCategory == "Matematiikka"
            })
            var correctAnswers = 0;
            var wrongAnswers = 0;

            for (var i=0; i < CategoryAnswers.length; i++) {
                if (CategoryAnswers[i].result === "Correct") {
                    correctAnswers += 1;
                }
                else if (CategoryAnswers[i].result === "Wrong")
                {
                    wrongAnswers += 1;
                }
            }
        }
        else if(TaskFind[rnd].category == "Suomi")
        {
            console.log("AAAAAA Bundes")

            const answers = await AnswerModel.find({userid: req.user.id})

            CategoryAnswers = answers.filter(function (el){
                return el.questionCategory == "Suomi"
            })
            var correctAnswers = 0;
            var wrongAnswers = 0;

            for (var i=0; i < CategoryAnswers.length; i++) {
                if (CategoryAnswers[i].result === "Correct") {
                    correctAnswers += 1;
                }
                else if (CategoryAnswers[i].result === "Wrong")
                {
                    wrongAnswers += 1;
                }
            }
        }
        else if(TaskFind[rnd].category == "Englanti")
        {
            const answers = await AnswerModel.find({userid: req.user.id})

            CategoryAnswers = answers.filter(function (el){
                return el.questionCategory == "Englanti"
            })
            var correctAnswers = 0;
            var wrongAnswers = 0;

            for (var i=0; i < CategoryAnswers.length; i++) {
                if (CategoryAnswers[i].result === "Correct") {
                    correctAnswers += 1;
                }
                else if (CategoryAnswers[i].result === "Wrong")
                {
                    wrongAnswers += 1;
                }
            }
        }

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: TaskFind[rnd],
            rnd: rnd,
            Answers: CategoryAnswers,
            CorrectAnswers: correctAnswers,
            WrongAnswers: wrongAnswers,
        });
    }
    else
    {
        const allTasks = await Task.find({});
        var rnd = Math.floor(Math.random() * allTasks.length);
    
        // res.render("taskview/index.ejs", 
        // {
        //     loggedin: loggedin,
        //     Task: allTasks[rnd],
        //     rnd: rnd
        // });
        res.render("loginview/index.ejs", 
        {
    
        });
    }
})

router.get("/paatoksentekotaidot", async (req, res) =>
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

        const answers = await AnswerModel.find({userid: req.user.id})

        const PaatosAnswers = answers.filter(function (el){
            return el.questionCategory == "Päätöksentekotaidot"
        })
        var PaatoscorrectAnswers = 0;
        var PaatoswrongAnswers = 0;

        for (var i=0; i < PaatosAnswers.length; i++) {
            if (PaatosAnswers[i].result === "Correct") {
                PaatoscorrectAnswers += 1;
            }
            else if (PaatosAnswers[i].result === "Wrong")
            {
                PaatoswrongAnswers += 1;
            }
        }
        
        const PaatosTasks = await Task.find({category: "Päätöksentekotaidot"});
        var PaatosTasksArray = [];

        PaatosTasks.forEach(element =>
        {
            PaatosTasksArray.push(element._id);
        })

        NotAvailableTasksArray.forEach(element =>
        {
            PaatosTasksArray = PaatosTasksArray.filter(task => task._id != element)
        })

        const TaskFind = await TaskModel.find({_id: PaatosTasksArray});

        var rnd = Math.floor(Math.random() * TaskFind.length);

        const correctuser = await UserModel.find({_id: req.user.id});

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            User: correctuser,
            Task: TaskFind[rnd],
            rnd: rnd,
            Answers: PaatosAnswers,
            CorrectAnswers: PaatoscorrectAnswers,
            WrongAnswers: PaatoswrongAnswers,
        });
    }
    else
    {
        const PaatosTasks = await Task.find({category: "Päätöksentekotaidot"});
        var rnd = Math.floor(Math.random() * PaatosTasks.length);

        res.render("loginview/index.ejs", 
        {
    
        });
    }
})

router.get("/matematiikka", async (req, res) =>
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

        const answers = await AnswerModel.find({userid: req.user.id})

        const MatematiikkaAnswers = answers.filter(function (el){
            return el.questionCategory == "La Liga"
        })
        var MatematiikkacorrectAnswers = 0;
        var MatematiikkawrongAnswers = 0;

        for (var i=0; i < MatematiikkaAnswers.length; i++) {
            if (MatematiikkaAnswers[i].result === "Correct") {
            MatematiikkacorrectAnswers += 1;
            }
            else if (MatematiikkaAnswers[i].result === "Wrong")
            {
                MatematiikkawrongAnswers += 1;
            }
        }
        
        const MatematiikkaTasks = await Task.find({category: "Matematiikka"});
        var MatematiikkaTasksArray = [];

        MatematiikkaTasks.forEach(element =>
        {
            MatematiikkaTasksArray.push(element._id);
        })

        NotAvailableTasksArray.forEach(element =>
        {
            MatematiikkaTasksArray = MatematiikkaTasksArray.filter(task => task._id != element)
        })

        const TaskFind = await TaskModel.find({_id: MatematiikkaTasksArray});

        var rnd = Math.floor(Math.random() * TaskFind.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: TaskFind[rnd],
            rnd: rnd,
            Answers: MatematiikkaAnswers,
            CorrectAnswers: MatematiikkacorrectAnswers,
            WrongAnswers: MatematiikkawrongAnswers,
        });
    }
    else
    {
        const MatematiikkaTasks = await Task.find({category: "Matematiikka"});
        var rnd = Math.floor(Math.random() * MatematiikkaTasks.length);

        res.render("loginview/index.ejs", 
        {
    
        });
    }    
})

router.get("/suomi", async (req, res) =>
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

        const answers = await AnswerModel.find({userid: req.user.id})

        const SuomiAnswers = answers.filter(function (el){
            return el.questionCategory == "Suomi"
        })
        var SuomicorrectAnswers = 0;
        var SuomiwrongAnswers = 0;

        for (var i=0; i <SuomiAnswers.length; i++) {
            if (SuomiAnswers[i].result === "Correct") {
                SuomicorrectAnswers += 1;
            }
            else if (SuomiAnswers[i].result === "Wrong")
            {
                SuomiwrongAnswers += 1;
            }
        }

        const SuomiTasks = await Task.find({category: "Suomi"});
        var SuomiTasksArray = [];

        SuomiTasks.forEach(element =>
        {
            SuomiTasksArray.push(element._id);
        })

        NotAvailableTasksArray.forEach(element =>
        {
            SuomiTasksArray = SuomiTasksArray.filter(task => task._id != element)
        })

        const TaskFind = await Task.find({_id: SuomiTasksArray});
        var rnd = Math.floor(Math.random() * TaskFind.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: TaskFind[rnd],
            rnd: rnd,
            Answers: SuomiAnswers,
            CorrectAnswers: SuomicorrectAnswers,
            WrongAnswers: SuomiwrongAnswers,
        });
    }
    else
    {
        const SuomiTasks = await Task.find({category: "Suomi"});
        var rnd = Math.floor(Math.random() * SuomiTasks.length);

        res.render("loginview/index.ejs", 
        {
    
        });
    }   
})

router.get("/englanti", async (req, res) =>
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

        const answers = await AnswerModel.find({userid: req.user.id})

        const EnglantiAnswers = answers.filter(function (el){
            return el.questionCategory == "Englanti"
        })
        var EnglanticorrectAnswers = 0;
        var EnglantiwrongAnswers = 0;

        for (var i=0; i < EnglantiAnswers.length; i++) {
            if (EnglantiAnswers[i].result === "Correct") {
                EnglanticorrectAnswers += 1;
            }
            else if (EnglantiAnswers[i].result === "Wrong")
            {
                EnglantiwrongAnswers += 1;
            }
        }
        
        const EnglantiTasks = await Task.find({category: "Englanti"});
        var EnglantiTasksArray = [];

        EnglantiTasks.forEach(element =>
        {
            EnglantiTasksArray.push(element._id);
        })

        NotAvailableTasksArray.forEach(element =>
        {
            EnglantiTasksArray = EnglantiTasksArray.filter(task => task._id != element)
        })

        const TaskFind = await Task.find({_id: EnglantiTasksArray});
        var rnd = Math.floor(Math.random() * TaskFind.length);

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: TaskFind[rnd],
            rnd: rnd,
            Answers: EnglantiAnswers,
            CorrectAnswers: EnglanticorrectAnswers,
            WrongAnswers: EnglantiwrongAnswers,
        });
    }
    else
    {
        const EnglantiTasks = await Task.find({category: "Englanti"});
        var rnd = Math.floor(Math.random() * EnglantiTasks.length);

        res.render("loginview/index.ejs", 
        {
    
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
    console.log(correctquestion[0].category)

    if(correctquestion[0].correctOption == req.body.answer)
    {
        console.log("Correct Answer")
        
        const newAnswer = new AnswerModel({
            questionid: req.body.questionid,
            userid: req.user.id,
            questionCategory: correctquestion[0].category,
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
            questionCategory: correctquestion[0].category,
            username: username,
            result: "Wrong",
            date: new Date().toString()
        });
        await newAnswer.save();
    }
});

router.post("/rating", async (req, res) => 
{
    var taskquery = {_id: req.body.questionid}

    if (req.body.rating == 1)
    {
        await TaskModel.updateOne(taskquery, {$inc: {Rating: 1}})
    }
    else
    {       
        await TaskModel.updateOne(taskquery, {$inc: {Rating: -1}})
    }
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
    let loggedin = false;

    if (req.isAuthenticated())
    {
        loggedin = true;
    }
    else
    {
        loggedin = false;
    }

    var newText = req.body.question
    newText = newText.replace(/\r?\n/g, "\n");
    console.log("PPPPPPPPPPP")
    console.log(newText)
    
    try
    {
        console.log("try");
        const newTask = new Task({
            question: newText,
            imageurl: req.body.imageurl,
            description: req.body.description,
            descriptionimageurl: req.body.descriptionimageurl,
            category: req.body.category,
            optionA: req.body.optionA,
            optionB: req.body.optionB,
            optionC: req.body.optionC,
            optionD: req.body.optionD,
            correctOption: req.body.correctOption
        })
        await newTask.save();
        console.log("New Question Saved");

        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: newTask
        });
    }
    catch
    {
        console.log("FAIL");
        res.redirect("/");
    }
})

router.get("/admin", async (req, res) => 
{
    const tasks = await TaskModel.find({});
    res.render("adminview/admin.ejs",
    {
        tasks: tasks
    })
})

router.get("/admin/:id", async (req, res) => 
{
    let tasksearchoptions = {_id: req.params.id};
    console.log("RRRRRRRRRRRRRRRRRR")
    console.log(req.params.id)
    
    const task = await TaskModel.find(tasksearchoptions).exec()
    .then(doc => 
        {
            console.log(doc)
            res.status(200).json(doc);
        });


    res.redirect("/admin");
})

router.post("/admin/update", async (req, res) => 
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

    var newText = req.body.question
    newText = newText.replace(/\r?\n/g, "\n");

    var taskquery = {_id: req.body.questionid}
    
    await TaskModel.updateOne(taskquery, {$set: {question: newText, imageurl: req.body.imageurl, description: req.body.description, descriptionimageurl: req.body.descriptionimageurl, category: req.body.category, optionA: req.body.optionA, optionB: req.body.optionB, optionC: req.body.optionC, optionD: req.body.optionD, correctOption: req.body.correctOption}})

    const Task = await TaskModel.find({_id: req.body.questionid})

    try
    {
        res.render("taskview/index.ejs", 
        {
            loggedin: loggedin,
            Task: Task[0]
        });
    }
    catch
    {
        console.log("FAIL");
        res.redirect("/");
    }
})

router.post("/admin/show", async (req, res) => 
{
    console.log("WWWWWWWWWWWWWWWWWWWWWWW Show")
    let loggedin = false;

    if (req.isAuthenticated())
    {
        loggedin = true;
    }
    else
    {
        loggedin = false;
    }

    const task = await TaskModel.find({_id: req.body.questionid2})

    res.render("taskview/index.ejs", 
    {
        loggedin: loggedin,
        Task: task[0]
    });
})

router.post("/admin/delete", async (req, res) => 
{
    console.log("FFFFFFFFFFFFFFFFFFFF Delete")

    let loggedin = false;

    if (req.isAuthenticated())
    {
        loggedin = true;
    }
    else
    {
        loggedin = false;
    }

    var taskquery = {_id: req.body.questionid3}

    console.log("EEEEEEEEEEEEEEEE")
    console.log(req.body.questionid3)

    TaskModel.deleteOne(taskquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
      });

    // const tasks = await TaskModel.find({});
    // console.log(tasks)

    // res.render("adminview/admin.ejs", 
    // {
    //     tasks: tasks
    // });

    res.redirect("/tehtavat/admin")
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