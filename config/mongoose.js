//import mongoose
const mongoose = require("mongoose");

//connet to localhost
mongoose.connect("mongodb://localhost/todo");

//making connection
const db = mongoose.connection;

//checking error
db.on("error", console.error.bind(console, "Connection Failed!!"));

//Once conectoin done then display massage
db.once("open", function(){
    console.log("connection established successfully");
});
