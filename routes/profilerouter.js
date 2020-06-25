const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const AnswerModel = require("../models/AnswerModel");


router.get("/", async (req, res) => 
{
    res.redirect("/profiili/" + req.user.id)
})

router.get("/:id", async (req, res) => 
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

    const LoggedUser = await UserModel.find({_id: req.params.id})
    const answers = await AnswerModel.find({userid: req.params.id})
    
    var correctAnswers = 0;
    var wrongAnswers = 0;

    for (var i=0; i < answers.length; i++) {
        if (answers[i].result === "Correct") {
            correctAnswers += 1;
        }
        else if (answers[i].result === "Wrong")
        {
            wrongAnswers += 1;
        }
    }

    console.log(correctAnswers)
    console.log(wrongAnswers)


    res.render("profileview/index.ejs",
    {
        loggedin: loggedin,
        LoggedUser: LoggedUser[0],
        answers: answers,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers
    });
})

module.exports = router;