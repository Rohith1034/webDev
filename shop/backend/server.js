const express = require("express");
const mongoose = require("mongoose");
const multer = require('multer'); // Middleware for handling file uploads
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('C:\\Users\\manin\\webdev\\shop\\frontend\\public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}))
const storage = multer.memoryStorage(); // Store uploaded files in memory
const upload = multer({ storage: storage });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const sequenceSchema = new mongoose.Schema({
    _id: String,
    seq: Number
});

const productSchema = new mongoose.Schema({
    productId: String,
    productName: String,
    category: String,
    subCategory: String,
    price: Number,
    quantity: Number,
    colors: String,
    images: [],
    description: String
})

const productDb = new mongoose.model("Products",productSchema);
const Sequence = mongoose.model('Sequence', sequenceSchema);

app.listen(5000,() => {
    console.log("server started at port 5000");
})

app.get("/",(req,res) => {
    res.sendFile("C:\\Users\\manin\\webdev\\shop\\frontend\\public\\index.html")
})

app.post('/api/data', upload.array('images', 5),async (req, res) => {

  try {
    const itemId_to_string = await getNextSequenceValue("items_id");
    const categoryDb = new mongoose.model(req.body.category,productSchema);
    const newProduct = new productDb({
        productId: itemId_to_string.toString(),
        productName: req.body.productName,
        category: req.body.category,
        subCategory: req.body.subCategory,
        price:req.body.price,
        quantity: req.body.quantity,
        colors: req.body.colors,
        description: req.body.description,
        images: req.files
    })

    const categoryProduct = newProduct;
    const newcategoryProduct = new categoryDb(categoryProduct);
    await newProduct.save();
    await newcategoryProduct.save();
    console.log("Product saved successfully");
  }

  catch(error) {
    console.log(error);
  }
  
});

app.post("/data",async(req,res) => {
    try {
        const foundItems = await productDb.find({});
        res.send(foundItems);
    }

    catch(error) {
        console.log(error)
    }
})

async function getNextSequenceValue(sequenceName) {
    try {
        const sequenceDocument = await Sequence.findOneAndUpdate(
            { _id: sequenceName },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        return sequenceDocument.seq;
    } catch (error) {
        throw error;
    }
}

const main = async() => {
    try {
        await mongoose.connect("mongodb+srv://rohithchanda7:Rohith1034@sreeshakthisilks.rbalo0y.mongodb.net/");
        console.log("Connected to database successfully");
    }

    catch(error) {
        console.log(error)
    }
}

main();

