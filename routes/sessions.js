var router = require('express').Router();
var models = require('../db/index').models;

module.exports = router;

router.post('/',function(req,res,next){
	console.log(req.body.user); 
	models.User.findOne({
		where:{
			username: req.body.user.username,
			password: req.body.user.password
		}
	})
	.then(function(user){
		if(user){
			req.session.userId = user.id;
			return res.send(user);
		}else{
			return res.sendStatus(401);
		}
	})
	.catch(next);
});

router.delete('/',function(req,res,next){
	req.session.userId = null;
	res.sendStatus(200);
});

router.get('/',function(req,res,next){
	if(res.locals.user){
		res.send(res.locals.user);		
	}else{
		res.sendStatus(401);
	}
})