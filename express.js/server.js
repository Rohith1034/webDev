const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname));

app.post("/",function(req,res) {
    const cityname = req.body.cityname;
    const city_id = req.body.pincode;
    const url = "https://api.weatherbit.io/v2.0/current/airquality?key=c1d69141255243e7aa50f8028b362936" + "&city=" + cityname +"&city_id=" + city_id;
    console.log(url);
    https.get(url,function(response) {
        console.log(response.statusCode);
        response.on("data",function(data) {
            airdata = JSON.parse(data);
            res.write("<h1>"+airdata.data[0].aqi+"</h1>");
            res.send();
        })
    });
})

app.listen(3000,function(req,res){
    console.log("Server Started");
})