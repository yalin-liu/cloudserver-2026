const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = ""; // update your connection string
const client = new MongoClient(uri); 
const dbName = ''; // To be filled in 
const collectionName = ''; // To be filled in

  
const aggregateRestaurantsWithMatch = async (db) => {
    var collection = db.collection(collectionName);
    let results = await collection.aggregate(
        [
            {
                $match: {
                    "borough": "Queens",
                    "cuisine": "Brazilian"
                }
            },
            {
                $group: {
                    "_id": "$address.zipcode",
                    "count": {
                        $sum: 1
                    }
                }
            }
        ]
    ).toArray();
    return results;
}
  
const aggregateRestaurants = async (db) => {
    var collection = db.collection(collectionName);
    let results = await collection.aggregate(
        [
            {
                $group: {
                    "_id": "$borough",
                    "count": { 
                        $sum: 1 
                    }
                }
            }
        ]
    ).toArray();
    return results;
}
  

async function main() {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const aggregateResults = await aggregateRestaurantsWithMatch(db);
 
    console.log(aggregateResults);
    //customize the console.log as you want 
    // aggregateResults.forEach((c) => { console.log(c); });

    return aggregateResults;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

