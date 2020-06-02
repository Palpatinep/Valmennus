const express = require("express");
const app = express();
const router = express.Router();
const register = require("./registerrouter.js");
// const users = register.users;
 

router.get("/", async (req, res) =>
{
    if (req.isAuthenticated())
    {
        res.render("index.ejs",
        {
            users: "Kirjautunut"
        })
    }
    else
    {
        res.render("index.ejs",
        {
            users: "Ei Kirjautunut"
        })
    }
})

router.delete('/logout', (req, res) => 
{
    req.logOut()
    res.redirect('/login')
})

module.exports = router;