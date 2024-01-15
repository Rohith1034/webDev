const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('frontend'));
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile("C:\\Users\\manin\\webdev\\card\\frontend\\public\\index.html");
})

app.get("/api/data", async (req, res) => {
    try {
        const dbName = await mongoose.connection.collection("card");
        const dataItems = await dbName.find({}).toArray();
        res.send(dataItems);
    }

    catch (error) {
        console.log(error);
    }
})

app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

app.listen(3000, (req, res) => {
    console.log("Server started at port 3000");
})

const main = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/sampleReact");
        console.log("connected to database");
    }

    catch(error) {
        console.log(error)
    }
}

main();