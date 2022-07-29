const express = require("express");
const path  = require("path");
const port = 8000;

const db = require("./config/mongoose");
const Todo = require("./models/Todo");

const app = express();
//set ejs as view engine and set the path
app.set("view engine", "ejs");
app.set("views", "views");
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/", require("./routs/home"));
// app.use(express.urlencoded());
//middlewares

app.listen(port, function(err){
    if (err) {
        console.log("Server Crashed!!");
        return;
    }
    console.log("Server is running successfully on port :", port);
    return;
})