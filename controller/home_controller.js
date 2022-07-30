// Exported database to controller
const Todo = require("../models/Todo");

// Rendering home page while user visit to page
module.exports.home = function(req, res){

    // Passing database to homepage and checking for error
    Todo.find({}, function(err, allDetails){
        if(err) {
          console.log("error to fetch the data");
       }
       return res.render("homePage", {
        todoDb : allDetails
       });
    });
};

// Add task functionality
module.exports.addTask = function(req, res){

  // Adding details to database and printing error if any
  Todo.create({
      description : req.body.description,
      category : req.body.category,
      date : req.body.date
  }, function(err, details){
    
    if (err) {
      console.log("data is not added to database");
    }
    console.log("data added successfully");
    return res.redirect("back");

  });
    
}

// Delete task functionality
module.exports.deleteTask = function(req, res){
   
  // Fetching Id and deleting from database
  let id = req.query.id;
  Todo.findByIdAndDelete(id, function(err){
  
     if (err) {
        console.log("Not able to delete data");
      }
      console.log("data deleted successfully");
      return res.redirect("back");

   });
}