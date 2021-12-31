const express = require('express')
const router = express.Router();
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const UserModel = require("../models/UserModel.js");

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
    res.render("registerview/register.ejs",
    {
      loggedin: loggedin
    });
})

router.post("/", checkNotAuthenticated, async (req, res) =>
{
    try
    {
      const User = require("../models/UserModel");
      var duplicate = false;
      const users = await User.find();

      users.forEach(element =>
        {
          if (element.email == req.body.email)
          {
            duplicate = true;
          }
        })

      if (req.body.password != req.body.password2)
      {
        console.log("Passwords do not match");
        loggedin = false;
        res.render("registerview/index.ejs",
        {
          errorMessage: "Salasanat eivät täsmää",
          loggedin: loggedin
        });
      }
      else if (duplicate)
      {
        console.log(duplicate)
        console.log("Email already exists");
        loggedin = false;
        res.render("registerview/index.ejs",
        {
          errorMessage: "Sähköposti on jo rekisteröity",
          loggedin: loggedin
        });
      }
      else
      {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new UserModel(
          {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            date: new Date().toString()
          });
          console.log(newUser);
        try
        {
            await newUser.save();
            req.flash("success_msg", "You are now registered")
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
    }
    catch 
    {
        res.redirect("/register");
    }
    
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
}
