// Added mongoose to add the schema
const mongoose = require("mongoose");

// Creating document
const schema = new mongoose.Schema({
    description :{
        type : String,
        required : true
    },

    category : {
        type : String,
        required : true
    },

    date : {
        type : String,
        required : true
    }
    
});

// Adding Name to schema
const Todo = mongoose.model("Todo", schema);

// Exporting to other module
module.exports = Todo;