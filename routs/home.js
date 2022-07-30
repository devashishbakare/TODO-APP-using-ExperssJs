// Exporing express for using Router function
const express = require("express");

// Using express routing function to routing the request
const router = express.Router();

// Fetching home controller to access the method inside it
const homeController = require("../controller/home_controller");

// To rendering the home page when use visit page
router.get("/", homeController.home);

// Routing add request to home controller
router.post("/add-task", homeController.addTask);

// Rounting delete task to home controller
router.get("/delete-task", homeController.deleteTask);

// Exporting module for other(app) to access 
module.exports = router;


