const express = require('express');
const app = express();

app.use(express.static('public'));  // folder for static contents
app.use("/download",express.static('public/assets'));  // virtual path /download -> public/assets

const server = app.listen(process.env.PORT || 3000, () => { 
    const port = server.address().port;
    console.log(`Server is listening at port ${port}`); 
});
