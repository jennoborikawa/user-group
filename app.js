var express = require('express'); 
var path = require('path');
var User = require('./db/index').models.User;
var app = express(); 

module.exports = app; 

app.use(require('body-parser').json());
app.use(require('express-session')({ secret: process.env.SECRET}));
app.use('/browser', express.static(path.join(__dirname, 'browser')));
app.use(express.static(path.join(__dirname, 'node_modules'))); 

app.use(function(req,res,next){
	if(!req.session.userId){
		return next();
	}else{
		User.findById(req.session.userId)
		.then(function(user){
			res.locals.user = user;
			next();
		})
		.catch(next);
	}
});

app.use('/api/users', require('./routes/user.js'));
app.use('/api/groups', require('./routes/group.js'));
app.use('/api/sessions', require('./routes/sessions.js'));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'browser/index.html'));
}); 

