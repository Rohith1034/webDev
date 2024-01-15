const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname));

app.post("/submit",function(req,res) {
    const city = req.body.cityName;
    console.log(city);
    https.get("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=63dbb5fa29434b9702e22b2b1101186a",function(response) {
        console.log(response.statusCode);
        response.on("data",function (data) {
            const weatherdata = JSON.parse(data);
            res.write("<h1>" + weatherdata.weather[0].description +"<h1>");
            res.send();
        });
        
    });
});

app.listen(3000,function() {
    console.log("Server started");
});