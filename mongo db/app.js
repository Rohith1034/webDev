const { MongoClient }  = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri, { useUnifiedTopology: true });
 
async function run() {
    try {
        await client.connect();
        console.log('Connected to MongoDB!');
 
        const database = client.db('fruitsMongoDB'); // Creates the database if it's not existing
        const fruitsColletion = database.collection('fruits'); // Creates the collection if it's not existing
 
        //creates the data
        // if we comment al the await fruitsColletion.insertMany([{}]); now we can only query 
        // with the Manual Iteration const cursor when running node app.js
        await fruitsColletion.insertMany([
            {
                "_id": 4,
                name: "apple",
                score: 9,
                review: "One of the bests!!!"
            },
            {
                "_id": 5,
                name: "Strawberry",
                score: 7,
                review: "is there"
            },
            {
                "_id": 6,
                name: "pineapple",
                score: 8,
                review: "already want another one"
            }
        ]);
        
        /**
         * Manual Iteration: You can use the hasNext() method to check if a cursor can provide 
         * additional data, and then use the next() 
         * method to retrieve the subsequent element of the cursor:
         */
        
        const cursor = fruitsColletion.find({});
        while (await cursor.hasNext()) {
          console.log(await cursor.next());
        }
 
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
 
    } finally {
        // Ensures that the client will close when you finish/error
 
        await client.close();
        console.log('Disconnected from MongoDB!');
    }
}
run().catch(console.dir);