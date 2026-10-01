const { MongoClient, ServerApiVersion } = require('mongodb');
const url = ''; // add your connection string  
const client = new MongoClient(url);
const dbName = 'test';
const collectionName = 'books';

const insertDocument = async (db) => {
  var collection = db.collection(collectionName);
  var results = await collection.<a MongoDB method>(<Inserted object>);//<...> needs to be replaced. 
  return results;
};

async function main() {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
	const insertResults = await <an asyc function>(db);//<...> needs to be replaced. 
	console.log('Inserted results>>>',insertResults);
}
main()
  .then(console.log("Running your MongoDB-driver! ------ (This is an async running result.)"))
  .catch(console.error)
  .finally(() => client.close());