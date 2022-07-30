// Import mongoose for use
const mongoose = require("mongoose");

// Connet to localhost
mongoose.connect("mongodb://localhost/todo");

// Making connection
const db = mongoose.connection;

// Checking error if any
db.on("error", console.error.bind(console, "Connection Failed!!"));

// Once conectoin done then display massage
db.once("open", function(){
    console.log("connection established successfully");
});
