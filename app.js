var express = require('express'); 
var path = require('path');

var app = express(); 

module.exports = app; 

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'browser/index.html'));
}); 