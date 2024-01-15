const mongoose = require('mongoose');
const mongoURL = 'mongodb://0.0.0.0:27017/personDB';
 
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
/*
 
const fruitSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    rating: Number,
    review: String
});
 
const Fruit = mongoose.model('FruitDB', fruitSchema);
 
const apple = new Fruit({
    _id: 1,
    name: "Apple",
    rating: 7,
    review: "It is good but not that good"
});
 
const banana = new Fruit({
    _id: 2,
    name: "Banana",
    rating: 8,
    review: "Kind of good"
});
 
const mango = new Fruit({
    _id: 3,
    name: "Banana",
    rating: 10,
    review: "Perfect!!!"
});
 
async function add(){
    await Fruit.insertMany([apple, banana, mango]).then(() => {
        console.log('Added all items');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    }).finally(()=>{mongoose.disconnect();});
}
 
add();
*/
const personSchema = new mongoose.Schema({
    person_id: Number,
    name: String,
    age: Number,
});


const Person = mongoose.model("PersonDB",personSchema);
var personname = [];

var personname = [];

async function getPersons() {
    try {
        const personsData = await Person.find({});
        personsData.forEach((person) => personname.push(person.name));

        // After the data is collected, you can use the personname array here or in other parts of your code
        console.log("Names of persons:", personname);
    } catch (error) {
        console.log(error);
    }
}

getPersons();


console.log(personname);
