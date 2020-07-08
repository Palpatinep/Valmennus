const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const AnswerModel = require("../models/AnswerModel");
const UserModel = require("../models/UserModel");

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

    const answers = await AnswerModel.find({result: "Correct"});

    console.log(answers);


    var rez = {};
    answers.forEach(function(item){
    rez[item.username] ? rez[item.username]++ :  rez[item.username] = 1;
    });
    console.log("BBBBBBBBBBBBBBBB")
    console.log(rez);



    // Object.keys(rez).forEach(function(key,index) {
    //     console.log(key)
    //     console.log(rez.key)
    // });

    // Object.keys(rez).forEach(e => console.log(`key=${e}  value=${rez[e]}`));
    console.log("AAAAAAAAAA")
    Object.keys(rez).forEach(e => console.log(rez[e]));



    res.render("leaderboardview/index.ejs",
    {
        answers: answers,
        rez: rez,
        loggedin: loggedin
    });
})

module.exports = router;