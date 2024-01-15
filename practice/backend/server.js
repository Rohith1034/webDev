const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const axios = require("axios");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());



app.listen(5000,() => {
    console.log("Server started in port 5000");
})


app.post("/data",(res,req)=> {
    
})

const main = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/");
        console.log("Connected to database");
    }
    catch (error) {
        console.log(error)
    }
}

main();