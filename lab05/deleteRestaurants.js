const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = ""; // update your connection string
const client = new MongoClient(uri); 
const dbName = ''; // To be filled in 
const collectionName = ''; // To be filled in
 
  
const deleteManyRestaurants = async (db) => { 
    var collection = db.collection(collectionName);
    let results = await collection.deleteMany({ "restaurant_id" : "40373938" });
    return results;
}
 
const deleteRestaurants = async (db) => { 
    var collection = db.collection(collectionName);
    let results = await collection.deleteOne({ "restaurant_id" : "40367481" });
    return results;
}

async function main() {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server"); // the following code examples can be pasted here...
    const db = client.db(dbName);
    const deleteResults = await deleteRestaurants(db);
    console.log(JSON.stringify(deleteResults));

    return deleteResults;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

