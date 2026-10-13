const mongoose = require('mongoose');
const uri = '';

const kittySchema = require('./models/kitty');

// Compile our schema into a Model. 
const Kitten = mongoose.model('Kitten', kittySchema);

async function main() {

	await mongoose.connect(uri);

	console.log('Mongoose Connected!')

	// Delete one document with the name field including "fluffy"
	await Kitten.deleteOne({name: 'fluffy'});
}
  
main()
	.then(console.log('Update Kitten'))
	.catch((err) => console.log(err))
	.finally()
  