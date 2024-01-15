const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs"); // Set EJS as the view engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post("/submit", function (req, res) {
    const name = req.body.nameofperson;
    const age = req.body.ageofperson;
    console.log(name);
    console.log(age);
});

app.get("/", function (req, res) {
    // In this example, let's just pass the form data back to the index page.
    const persondata = {
        nameofperson: req.body.nameofperson,
        ageofperson: req.body.ageofperson,
    };

    res.render("index", {
        data: persondata,
    });
});

app.listen(3000, function () {
    console.log("Server started");
});
