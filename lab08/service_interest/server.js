const express = require('express');
const app = express();

app.set('view engine', 'ejs');

class SimpleInterest {
	constructor(p,r,t) {
		this.principal = p;
		this.rate = r;
		this.time = t;
		this.interest = p * r * t;}
}

// web-page services ~ Testing via a browser
// provide an EJS response 
// Access GET URL: localhost:8099/simpleinterest?principal=10000&rate=0.01&time=10
app.get('/simpleinterest', function(req,res) {
	let r = new SimpleInterest(Number(req.query.principal), Number(req.query.rate), Number(req.query.time));
	res.status(200).render('result',{result:r});
});

// RESTful services ~ Testing via a CURL command
// provide a json result
// Run CURL Command: curl "localhost:8099/api/simpleinterest/10000/0.01/10"
app.get('/api/simpleinterest/:principal/:rate/:time', function(req,res) {
	let r = new SimpleInterest(Number(req.params.principal), Number(req.params.rate), Number(req.params.time));
	res.status(200).type('json').json(r);
});

app.listen(process.env.PORT || 8099);

