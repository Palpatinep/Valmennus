const express = require('express')
const router = express.Router();
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const UserModel = require("../models/UserModel.js");

const users = [];

router.get("/", checkNotAuthenticated, async (req, res) =>
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
    res.render("registerview/index.ejs",
    {
      loggedin: loggedin
    });
})

router.post("/", checkNotAuthenticated, async (req, res) =>
{
    try
    {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push(
            {
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })
        const newUser = new UserModel(
          {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            date: new Date().toString()
          });

        try
        {
            await newUser.save();
            console.log("New user created");
            res.redirect("/login");
        }
        catch
        {
            res.render("/tehtavat");
            errorMessage: "Virheellinen syöte"
        }
        res.redirect("/login");
    }
    catch
    {
        res.redirect("/register");
    }
    console.log(users);
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }

module.exports = 
{
    checkAuthenticated: checkAuthenticated,
    checkNotAuthenticated: checkNotAuthenticated,
    router: router,
    users: users
}
