var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');

app.use(express.static(path.join(__dirname, '/public/views')));

app.get('/', function(req, res)
{
  res.sendFile(path.join(__dirname, '/public', '/views/index.html'));
});

app.listen(3000);
console.log("Server is starting on port 3000")
