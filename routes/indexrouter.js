const express = require("express");
const app = express();
const router = express.Router();
const register = require("./registerrouter.js");
// const users = register.users;
 

router.get("/", async (req, res) =>
{
    let users = "";
    let loggedin = false;

    if (req.isAuthenticated())
    {
        users = "Kirjautunut";
        loggedin = true;
    }
    else
    {
        users = "Ei Kirjautunut";
        loggedin = false;
    }

    if (loggedin)
    {
        res.render("index.ejs",
        {
            users: users,
            loggedin: loggedin
        })
    }
    else
    {
        res.render("index.ejs",
        {
            users: users,
            loggedin: loggedin
        })
    }
})

router.delete('/logout', (req, res) => 
{
    req.logOut()
    res.redirect('/login')
})

router.get("/admin", (req, res) =>
{
    res.render("taskview/create");
})

module.exports = router;