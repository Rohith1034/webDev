const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const articleSchem = new mongoose.Schema({
    title: String,
    content: String,
})

const article =  new mongoose.model("Article", articleSchem);

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, function (req, res) {
    console.log("Server started");
})

app.get("/articles", async function (req, res) {
    const articleData = await article.find({}).exec();
    res.send(articleData);
})

app.post("/articles",async function (req,res) {
    const newArticle = new article({
        title: req.body.title,
        content: req.body.content
    })
    try {
        await newArticle.save();
        res.send("added new article");
    }
    catch(error) {
        res.send(error);
    }
})

app.delete("/articles",async function(req,res) {
    try {
        await article.deleteMany();
        res.send("Successfully deleted all items")
    }
    catch (error) {
        res.send(error)
    }
})

app.get("/articles/:articletitle",async function(req,res) {
    try {
        const articleTitle = req.params.articletitle;
        const foundResults = await article.find({title: articleTitle});
        res.send(foundResults);
    } 
    catch(error) {
        res.send(error);
    }
})

app.put("/articles/:articletitle",async function(req,res) {
    try {
        await article.updateOne({title: req.params.articleTitle},{title: req.body.title,content: req.body.content});
        res.send("successfully updated");
    }
    catch(error) {
        console.log(error);
    }
})

const main = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");
        console.log("connected successfully");

    }
    catch (error) {
        console.log(error);
    }
}
main();
