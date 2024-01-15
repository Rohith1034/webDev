const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname));


app.post("/submit",function(req,res) {
    const sample = req.body.sample;
    console.log(sample);
})

app.get("/",function(req,res) {
    res.render("index.ejs");
})

app.listen(3000,function(req,res){
    console.log("Server started");
})