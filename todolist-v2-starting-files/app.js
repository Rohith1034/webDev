//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const mongoURL = 'mongodb://0.0.0.0:27017/todolistDB';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });


// Replace the uri string with your connection string.


const ItemSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model("Item", ItemSchema);
async function getItems(){
 
  const Items = await Item.find({});
  return Items;
 
}

app.get("/", function (req, res) {
  getItems().then(function(foundItems){
    res.render("list", {listTitle: "Today", newListItems: foundItems});
    console.log(foundItems);
  });
});

app.post("/", function (req, res) {

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    res.redirect("/work");
  } else {
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List" });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
