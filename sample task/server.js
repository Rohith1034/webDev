const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));

app.listen(3000,function(req,res) {
    console.log("Server started");
})

const main = async() => {
    mongoose.connect("mongodb://127.0.0.1:27017/sampletask");
    console.log("connected successfully");
}

main();