if (process.env.NODE_ENV !== "production")
{
    require("dotenv").config();
};

const express = require("express");
const app = express();
const router = express.Router();

app.set("view-engine", "ejs");
app.set("views", __dirname + "/views");

const indexrouter = require("./routes/indexrouter.js");

app.use("/", indexrouter);

app.listen(process.env.PORT || 3000);