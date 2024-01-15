const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname));

app.listen(3000,function(req,res) {
  console.log("Server started");
})

app.post("/",function (req,res) {
  const inputValues = req.body.inputValues;
  console.log(inputValues);
})