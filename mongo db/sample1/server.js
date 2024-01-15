const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
const mongoURL = 'mongodb://0.0.0.0:27017/personDB';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const sampleSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const details = [];

const Sample = mongoose.model("Sample", sampleSchema);

app.get("/", async function (req, res) {
    try {
        const items = await Sample.find();
        details.push(items);
    } catch (error) {
        console.error('Error retrieving data from MongoDB:', error);
        res.status(500).send("Error retrieving data");
    }
    res.render("index.ejs",{ items: details });
});

app.post("/submit", async function (req, res) {
    const name = req.body.personname;
    const age = req.body.personage;
    console.log(name, age);
    const item = new Sample({
        name: req.body.personname,
        age: req.body.personage,
    })
    try {
        // Save the item to MongoDB
        await item.save();
        console.log('Added item:', item);
    } catch (error) {
        console.error('Error saving item to MongoDB:', error);
    }
    res.redirect('/');
})


app.listen(3000, function () {
    console.log("Server started at 3000");
})
