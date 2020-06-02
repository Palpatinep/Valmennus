const express = require("express");
const app = express();
const router = express.Router();

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

    res.render("taskview/index.ejs", 
    {
        loggedin: loggedin
    });
})

module.exports = router;