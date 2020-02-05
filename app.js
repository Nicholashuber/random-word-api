// grab the packages we need
var express = require('express');
var app = express();
var port = 8080;
var fs = require('fs');
const url = require('url'); // built-in utility
var https = require('https');
var httpsServer = https.createServer(app);
var myObj = require('./words.json');

// start the server
app.listen(port);
httpsServer.listen(8443);

app.get('/word', function(req, res) {
  //178187
  //178187
  //178187
  var getMaxRandomInt = () => Math.floor(178187 * Math.random());
  // equivalent to the following:
  // function getMaxRandomInt() { return Math.floor(Number.MAX_SAFE_INTEGER * Math.random()); }

  var value = myObj[getMaxRandomInt()];

  res.write(value);
  res.end();
});

app.get('/random', function(req, res) {
  //178187
  //178187
  //178187
  var getMaxRandomInt = () => Math.floor(178187 * Math.random());
  // equivalent to the following:
  // function getMaxRandomInt() { return Math.floor(Number.MAX_SAFE_INTEGER * Math.random()); }

  var value = myObj[getMaxRandomInt()];

  res.write(value);
  res.end();
});