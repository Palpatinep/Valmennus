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

    const ValioliigaAnswers = answers.filter(function (el){
        return el.questionCategory == "Valioliiga"
    })
    const LaLigaAnswers = answers.filter(function (el){
        return el.questionCategory == "La Liga"
    })
    const SerieAAnswers = answers.filter(function (el){
        return el.questionCategory == "Serie A"
    })
    const BundesligaAnswers = answers.filter(function (el){
        return el.questionCategory == "Bundesliga"
    })

    console.log(ValioliigaAnswers)
    console.log(LaLigaAnswers)
    console.log(SerieAAnswers)
    console.log(BundesligaAnswers)

    
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var ValioliigacorrectAnswers = 0;
    var ValioliigawrongAnswers = 0;
    var LaLigacorrectAnswers = 0;
    var LaLigawrongAnswers = 0;
    var SerieAcorrectAnswers = 0;
    var SerieAwrongAnswers = 0;
    var BundesligacorrectAnswers = 0;
    var BundesligawrongAnswers = 0;

    for (var i=0; i < answers.length; i++) {
        if (answers[i].result === "Correct") {
            correctAnswers += 1;
        }
        else if (answers[i].result === "Wrong")
        {
            wrongAnswers += 1;
        }
    }
    for (var i=0; i < ValioliigaAnswers.length; i++) {
        if (ValioliigaAnswers[i].result === "Correct") {
            ValioliigacorrectAnswers += 1;
        }
        else if (ValioliigaAnswers[i].result === "Wrong")
        {
            ValioliigawrongAnswers += 1;
        }
    }
    for (var i=0; i < LaLigaAnswers.length; i++) {
        if (LaLigaAnswers[i].result === "Correct") {
            LaLigacorrectAnswers += 1;
        }
        else if (LaLigaAnswers[i].result === "Wrong")
        {
            LaLigawrongAnswers += 1;
        }
    }
    for (var i=0; i < SerieAAnswers.length; i++) {
        if (SerieAAnswers[i].result === "Correct") {
            SerieAcorrectAnswers += 1;
        }
        else if (SerieAAnswers[i].result === "Wrong")
        {
            SerieAwrongAnswers += 1;
        }
    }
    for (var i=0; i < BundesligaAnswers.length; i++) {
        if (BundesligaAnswers[i].result === "Correct") {
            BundesligacorrectAnswers += 1;
        }
        else if (BundesligaAnswers[i].result === "Wrong")
        {
            BundesligawrongAnswers += 1;
        }
    }

    console.log(correctAnswers)
    console.log(wrongAnswers)
    console.log(ValioliigacorrectAnswers)
    console.log(ValioliigawrongAnswers)
    console.log(LaLigacorrectAnswers)
    console.log(LaLigawrongAnswers)
    console.log(SerieAcorrectAnswers)
    console.log(SerieAwrongAnswers)
    console.log(BundesligacorrectAnswers)
    console.log(BundesligawrongAnswers)


    res.render("profileview/index.ejs",
    {
        loggedin: loggedin,
        LoggedUser: LoggedUser[0],
        answers: answers,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers,
        ValioliigaAnswers: ValioliigaAnswers,
        ValioliigacorrectAnswers: ValioliigacorrectAnswers,
        ValioliigawrongAnswers: ValioliigawrongAnswers,
        LaLigaAnswers: LaLigaAnswers,
        LaLigacorrectAnswers: LaLigacorrectAnswers,
        LaLigawrongAnswers: LaLigawrongAnswers,
        SerieAAnswers: SerieAAnswers,
        SerieAcorrectAnswers, SerieAcorrectAnswers,
        SerieAwrongAnswers: SerieAwrongAnswers,
        BundesligaAnswers: BundesligaAnswers,
        BundesligacorrectAnswers: BundesligacorrectAnswers,
        BundesligawrongAnswers: BundesligawrongAnswers
    });
})

module.exports = router;