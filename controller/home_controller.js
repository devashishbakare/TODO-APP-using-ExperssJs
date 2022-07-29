const Todo = require("../models/Todo");
module.exports.home = function(req, res){

    Todo.find({}, function(err, allDetails){
        if(err) {
          console.log("error to fetch the data");
       }
       return res.render("homePage", {
        todoDb : allDetails
       });
    });
};

module.exports.addTask = function(req, res){

  Todo.create({
      description : req.body.description,
      category : req.body.category,
      date : req.body.date
  }, function(err, details){
    if (err) {
      console.log("data is not added to database");
    }
    console.log("data added succefully");
    console.log(details);
    return res.redirect("back");
  });
  
   
}