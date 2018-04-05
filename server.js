const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname,'dist')));

// get routes
// app.use();

// catch all other routes & return to index
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port = process.env.PORT || 4300;

app.listen(4300,(req,res) => {
    console.log(`Maaz - AngularMaterial5Examples on ${port}`);
});