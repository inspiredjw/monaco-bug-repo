'use strict';

var express = require('express');
var fs = require('fs');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/monaco-editor', express.static(__dirname + '/node_modules/monaco-editor'));
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.type('html').send(data);
  });
});

app.listen(3000, function() {
  console.log('app listening on port 3000!');
});