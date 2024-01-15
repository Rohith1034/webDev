const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req,res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    height = height/100;
    var BMI = weight/(height*height);
    res.send("Your BMI is: "+BMI);
});

app.listen(3000,function() {
    console.log("Server started");
});