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

    const PaatosAnswers = answers.filter(function (el){
        return el.questionCategory == "Päätöksentekotaidot"
    })
    const MatematiikkaAnswers = answers.filter(function (el){
        return el.questionCategory == "Matematiikka"
    })
    const EnglantiAnswers = answers.filter(function (el){
        return el.questionCategory == "Englanti"
    })
    const SuomiAnswers = answers.filter(function (el){
        return el.questionCategory == "Suomi"
    })

    console.log(PaatosAnswers)
    console.log(MatematiikkaAnswers)
    console.log(EnglantiAnswers)
    console.log(SuomiAnswers)

    
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var PaatoscorrectAnswers = 0;
    var PaatoswrongAnswers = 0;
    var MatematiikkacorrectAnswers = 0;
    var MatematiikkawrongAnswers = 0;
    var EnglanticorrectAnswers = 0;
    var EnglantiwrongAnswers = 0;
    var SuomicorrectAnswers = 0;
    var SuomiwrongAnswers = 0;

    for (var i=0; i < answers.length; i++) {
        if (answers[i].result === "Correct") {
            correctAnswers += 1;
        }
        else if (answers[i].result === "Wrong")
        {
            wrongAnswers += 1;
        }
    }
    for (var i=0; i < PaatosAnswers.length; i++) {
        if (PaatosAnswers[i].result === "Correct") {
            PaatoscorrectAnswers += 1;
        }
        else if (PaatosAnswers[i].result === "Wrong")
        {
            PaatoswrongAnswers += 1;
        }
    }
    for (var i=0; i < MatematiikkaAnswers.length; i++) {
        if (MatematiikkaAnswers[i].result === "Correct") {
            MatematiikkacorrectAnswers += 1;
        }
        else if (MatematiikkaAnswers[i].result === "Wrong")
        {
            MatematiikkawrongAnswers += 1;
        }
    }
    for (var i=0; i < EnglantiAnswers.length; i++) {
        if (EnglantiAnswers[i].result === "Correct") {
            EnglanticorrectAnswers += 1;
        }
        else if (EnglantiAnswers[i].result === "Wrong")
        {
            EnglantiwrongAnswers += 1;
        }
    }
    for (var i=0; i < SuomiAnswers.length; i++) {
        if (SuomiAnswers[i].result === "Correct") {
            SuomicorrectAnswers += 1;
        }
        else if (SuomiAnswers[i].result === "Wrong")
        {
            SuomiwrongAnswers += 1;
        }
    }

    console.log(correctAnswers)
    console.log(wrongAnswers)
    console.log(PaatoscorrectAnswers)
    console.log(PaatoswrongAnswers)
    console.log(MatematiikkacorrectAnswers)
    console.log(MatematiikkawrongAnswers)
    console.log(EnglanticorrectAnswers)
    console.log(EnglantiwrongAnswers)
    console.log(SuomicorrectAnswers)
    console.log(SuomiwrongAnswers)


    res.render("profileview/index.ejs",
    {
        loggedin: loggedin,
        LoggedUser: LoggedUser[0],
        answers: answers,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers,
        PaatosAnswers: PaatosAnswers,
        PaatoscorrectAnswers: PaatoscorrectAnswers,
        PaatoswrongAnswers: PaatoswrongAnswers,
        MatematiikkaAnswers: MatematiikkaAnswers,
        MatematiikkacorrectAnswers: MatematiikkacorrectAnswers,
        MatematiikkawrongAnswers: MatematiikkawrongAnswers,
        EnglantiAnswers: EnglantiAnswers,
        EnglanticorrectAnswers, EnglanticorrectAnswers,
        EnglantiwrongAnswers: EnglantiwrongAnswers,
        SuomiAnswers: SuomiAnswers,
        SuomicorrectAnswers: SuomicorrectAnswers,
        SuomiwrongAnswers: SuomiwrongAnswers
    });
})

module.exports = router;