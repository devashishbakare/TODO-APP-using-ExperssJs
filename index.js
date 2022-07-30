// Exporting express to use
const express = require("express");

// Export path to use some functions in it
const path  = require("path");

// Assining port 
const port = 8000;

// Exporting mongoose to check connection
const db = require("./config/mongoose");

// Exproting db
const Todo = require("./models/Todo");

// Initializing express to app
const app = express();

//set ejs as view engine and set the path
app.set("view engine", "ejs");
app.set("views", "views");

// Using static data(aseests folder) to app 
app.use("/assets", express.static(__dirname + "/assets"));

// Encoding the data which comming from form
app.use(express.urlencoded());

// Export Router for directing request
app.use("/", require("./routs/home"));

// Listning on port and making sure server is running
app.listen(port, function(err){
    if (err) {
        console.log("Server Crashed!!");
        return;
    }
    console.log("Server is running successfully on port :", port);
    return;
})