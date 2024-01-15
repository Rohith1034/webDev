const express = require("express");
const bodyParser = require("body-parser");
const request  = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req,res) {
    var fname = req.body.fName;
    var lname = req.body.lName;
    var email = req.body.cu_email;
    console.log(fname,lname,email);
});

app.listen(3000,function() {
    console.log("Server started");
});

/* 
    APi Key
    ca0272421ac5f032adf26070fd5016bc-us13
*/


/* 
Audience id 
7aa567d0fb. 
*/