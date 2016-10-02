var express = require('express'); 
var path = require('path');

var app = express(); 

module.exports = app; 

app.use('/browser', express.static(path.join(__dirname, 'browser')));
app.use(express.static(path.join(__dirname, 'node_modules'))); 

// app.use('/api/users', require('./routes/user.js'));
// app.use('/api/groups', require('./routes/group.js'));
// app.use('/api/sessions', require('./routes/sessions.js'));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'browser/index.html'));
	
}); 

