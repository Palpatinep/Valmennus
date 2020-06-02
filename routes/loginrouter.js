const register = require("./registerrouter.js");
const users = register.users;
const express = require('express')
const app = express()
const router = express.Router();
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
// const initializePassport = require('../passport-config')

router.get("/", async (req, res) =>
{
    res.render("loginview/index.ejs", {users: register.users} );
})

router.post("/", async (req, res) =>  
{
    
})

module.exports = router;