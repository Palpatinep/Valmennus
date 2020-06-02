if (process.env.NODE_ENV !== "production")
{
    require("dotenv").config();
};

const express = require("express");
const app = express();
const expresslayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.on("open", () => console.log("Connected to Mongoose"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/indexlayout");

const indexrouter = require("./routes/indexrouter.js");
const taskrouter = require("./routes/taskrouter.js");
const registerrouter = require("./routes/registerrouter.js");
const loginrouter = require("./routes/loginrouter.js");

app.use(expresslayouts);
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
app.use("/", indexrouter);
app.use("/tehtavat", taskrouter);
app.use("/login", loginrouter);
app.use("/register", registerrouter);

app.listen(process.env.PORT || 3000);