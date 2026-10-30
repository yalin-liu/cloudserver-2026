const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// web services
app.get('/post', (req, res) => {
    fs.readFile('form.html', function (err, html) {if (err) {throw err; }
    	res.writeHead(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end(); })
});

app.post('/post/', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    // Here you can add logic to save the data to a database or perform other actions
    res.status(200).write('Received POST request\n');
    res.write(`Added Name: ${name}\n`);
    res.write(`Added Age: ${age}\n`);
    res.end('Data added successfully!\n');
});

// RESTful services
app.post('/api/post/', (req,res) => {
    res.status(200).type('json').json(req.body).end();
});
// curl -X POST -d 'name=coco&age=10' "localhost:8099/api/post"
// curl -H 'Content-Type: application/json' -X POST -d '{"name":"coco","age":10}' "localhost:8099/api/post"

app.listen(process.env.PORT || 8099);
