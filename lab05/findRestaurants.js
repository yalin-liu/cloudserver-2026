const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = ""; // update your connection string
const client = new MongoClient(uri); 
const dbName = ''; // To be filled in 
const collectionName = ''; // To be filled in

 
const findRestaurants = async (db) => { 
    var collection = db.collection(collectionName);
    let results = await collection.find({ "borough": "Manhattan" }).limit(10).toArray();
    return results;
}

async function main() {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server"); // the following code examples can be pasted here...
    const db = client.db(dbName);
    const findResults = await findRestaurants(db);
    // console.log("Searched results:", findResults);

    //customize the console.log as you want 
    //console.log(JSON.stringify(findResults));

    return findResults;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

