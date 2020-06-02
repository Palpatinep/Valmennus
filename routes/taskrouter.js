const express = require("express");
const app = express();
const router = express.Router();

router.get("/", async (req, res) =>
{
    res.render("taskview/index.ejs");
})

module.exports = router;