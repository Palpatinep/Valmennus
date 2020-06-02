const express = require('express')
const router = express.Router();
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const users = [];

router.get("/", async (req, res) =>
{
    res.render("registerview/index.ejs");
})

router.post("/", async (req, res) =>
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
            console.log("SUCCESS")
        res.redirect("/login");
    }
    catch
    {
        console.log("ERROR")
        res.redirect("/register");
    }
    console.log(users);
})

module.exports = router;
