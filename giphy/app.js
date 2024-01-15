/*
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
});


app.post("/", function (req, res) {
    res.send("Hey this rohith");
    https.get("https://api.giphy.com/v1/gifs/random?api_key=atKnQ9CD4yYcJKyveoaWJiLJlOMIGZRB", function (response) {
        response.on("data", function (data) {
           const gifdata = JSON.parse(data);
           console.log(JSON.stringify(data));
        });

    });
});


app.listen(3000, function (req, res) {
    console.log("Server started");
});


/* 
    API key:atKnQ9CD4yYcJKyveoaWJiLJlOMIGZRB
*/

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    https.get("https://api.giphy.com/v1/gifs/random?api_key=atKnQ9CD4yYcJKyveoaWJiLJlOMIGZRB", function (response) {
        let data = "";
        response.on("data", function (chunk) {
            data += chunk;
        });
        response.on("end", function () {
            const gifData = JSON.parse(data);
            //console.log(JSON.stringify(gifData));
            const a = gifData.data.images.fixed_width_still.url.toString();
            console.log(a);
            res.send("<img style='height: 150px;width: 150px;' src='"+a+"'>");
        });
    });
});

app.listen(3000, function () {
    console.log("Server started");
});

