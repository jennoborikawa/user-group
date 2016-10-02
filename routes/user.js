var router = require('express').Router();
var User = require('../db/index').models.User;

module.exports = router;

router.get('/', function(req,res,next){
	User.findAll()
	.then(function(users){
		res.send(users)
	})
	.catch(next);
});

router.put('/:id', function(req,res,next){
	User.update(
	{
		groupId: req.body.groupId
	},{
		where: {id: req.params.id}
	})
	.then(function(user){
		console.log('updated user')
		res.sendStatus(200);
	})
	.catch(next);
<<<<<<< HEAD
})
=======
});
>>>>>>> 5f69e522a01cf64ffa7bf081d3318f411edcd5ce
