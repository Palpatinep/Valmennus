const register = require("./registerrouter.js");
const users = register.users;
const checkNotAuthenticated = register.checkNotAuthenticated;
const express = require('express')
const app = express()
const router = express.Router();
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const Pass = require('../passport-config')
const initializePassport = Pass.initialize;

initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

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
    res.render("loginview/index.ejs",
    {
      loggedin: loggedin
    });
})

router.post('/', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))

module.exports = router;