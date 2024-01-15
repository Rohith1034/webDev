const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
});

const itemModel = mongoose.model("Item", userSchema); // Changed model name to "Item"

const app = express();

app.set("view engine", "ejs"); // Set view engine to EJS

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

const fulldate = new Date();
const date = fulldate.getDate();
const month = fulldate.getMonth() + 1;
const year = fulldate.getFullYear();

const main = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/todolist");
    console.log("Connected successfully");
};

main();

app.get("/", async function (req, res) {
    try {
        const dataitems = await itemModel.find();
        console.log(dataitems);

        res.render("index.ejs", {
            today: date,
            month: month,
            year: year,
            data: dataitems,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log("Server started");
});

app.post("/form", async function (req, res) {
    const itemName = req.body.todoname;
    try {
        const newItem = new itemModel({ name: itemName });
        await newItem.save();
        const updatedData = await itemModel.find();
        res.render("index.ejs", {
            today: date,
            month: month,
            year: year,
            data: updatedData,
            name: itemName, // Add the itemName to the rendered view
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
