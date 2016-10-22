var express = require('express');
var app = express();
// var path = require('path');

app.use(express.static(__dirname))
// app.use(express.static(__dirname + '/styles.css'))

app.get('/', function(req, res) {
  // res.sendFile(path.join(__dirname + '/homepage.html'))
  res.sendFile(__dirname + '/homepage.html')
});

app.get('/', function(req, res) {
  // res.sendFile(path.join(__dirname + '/homepage.html'))
  res.sendFile(__dirname + '/styles.css')
});

app.listen(3000, function() {
  console.log('Example app listining on port 3000!');
})
