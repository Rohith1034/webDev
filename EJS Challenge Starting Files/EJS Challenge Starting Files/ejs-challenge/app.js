//jshint esversion:6

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const newSchema = mongoose.Schema({
  heading: String,
  content: String
})
const colletion = new mongoose.model("blog",newSchema);
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));




app.get("/",async function (req, res) {
  try {
    const data = await colletion.find();
    res.render("home.ejs", {
      homecontent: homeStartingContent,
      post: data,
    });
  }
  catch (error) {
    console.log(error);
  }
})

app.get("/about", function (req, res) {
  res.render("about.ejs", {
    about: aboutContent,
  });
})

app.get("/contact", function (req, res) {
  res.render("contact.ejs", {
    contact: contactContent,
  });
})

app.get("/post/:postId",async function (req, res) {
  try {
    const requestedPostId = req.params.postId;
    colletion.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });
  }
  catch (error) {
    console.log(error)
  }
});

app.get("/compose", function (req, res) {
  res.render("compose.ejs");
})

app.post("/publish",async function (req, res) {
  var post = {
    tittle: req.body.title,
    content: req.body.post,
  }
  arr.push(post);
  try {
    const newdata = new colletion({
      heading: req.body.title,
      content: req.body.post,
    })
    main();
    await newdata.save();
  }
  catch (error) {
    console.log(error);
  }
  res.redirect("/");
})


app.listen(3000, function () {
  console.log("Server started on port 3000");
});


const main =  async() => {
    await mongoose.connect("mongodb://127.0.0.1:27017/todolist");
    console.log("Connected successfully");
}
main();