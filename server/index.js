//dependencies required for the app
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
let spendingAmount='5000';

//post route for adding speinding limit
app.post("/add-spending-limit", function(req,res) {
    //add the new spending from the post route
    spendingAmount = req.body.spend;
    res.json({
        status:true,
        message:"spending amount has been set successfully",
        spending:spendingAmount
    })
});

app.get("/get-spending-limit", function(req,res) {
    //add the new spending from the post route    
    res.json({
        status:true,
        spending:spendingAmount,
        message:"spending amount",
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