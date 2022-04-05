//dependencies required for the app
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
let anger={
    angerMeter:"",
    angerLevel:""
};

//post route for adding speinding limit
app.post("/add-anger-limit", function(req,res) {
    //add the new spending from the post route
    anger.angerLevel = req.body.angerLevel;
    anger.angerMeter = req.body.angerMeter;
    res.json({
        status:true,
        message:"anger value has been set sucessfully",
        anger
    })
});

app.get("/get-anger-limit", function(req,res) {
    //add the new spending from the post route    
    res.json({
        status:true,
        anger,
        message:"anger value",
    })
});

//render the ejs and display added task, completed task
app.get("/", function(req, res) {
    res.render("index", { task: task, complete: complete });
});

//set app to listen on port 3000
app.listen(3000, function() {
    console.log("server is running on port 3000");
});