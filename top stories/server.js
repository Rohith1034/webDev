// api: eRXKZa7W7uqeft2HAP29YTaz6mM37Wff

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname));

app.post("/",function(req,res) {
    console.log(req.body.data);
    const url = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=eRXKZa7W7uqeft2HAP29YTaz6mM37Wff";
    https.get(url,function(response) {
        console.log(res.statusCode);
        response.on("data",function(data) {
            topdata = JSON.parse(data);
            top = topdata.results[0].section;
        })
    })
})


app.listen(3000,function(req,res) {
    console.log("Server started");
})