// Create web server
var express = require('express');
var app = express();

// Create a route to handle GET requests
app.get('/comments', function(req, res){
    res.send('This is a GET request');
});

// Start the server
app.listen(3000, function(){
    console.log('Server is running on port 3000');
});

// Run the server with the command node comments.js
// Open a browser and go to http://localhost:3000/comments
// The browser will display the message 'This is a GET request'
