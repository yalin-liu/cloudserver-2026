const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = ""; // update your connection string
const client = new MongoClient(uri); 
const dbName = ''; // To be filled in 
const collectionName = ''; // To be filled in
 
 
const updateManyRestaurants = async (db) => { 
    var collection = db.collection(collectionName);
    let results = await collection.updateMany(
        { "borough" : "Manhattan" },
        { $set: { "name" : "This is update many" } }
    );
    return results;
}

const updateRestaurants = async (db) => { 
    var collection = db.collection(collectionName);
    let results = await collection.updateOne(
        { "restaurant_id" : "40356068" },
        { $set: { "address.street": "East 31st Street" }}
    );
    return results;
}

async function main() {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server"); // the following code examples can be pasted here...
    const db = client.db(dbName);
    const updateResults = await updateRestaurants(db);
    console.log(JSON.stringify(updateResults));

 
    if (updateResults.modifiedCount == 1) {
        console.log('Update succeed');
    } else {
        console.log('Update failed!!');
    }

    return updateResults;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

