var db = require('./_db');

var User = require('./user');

module.exports = {
  syncAndSeed: function(){
    return db.sync({ force: true })
      .then(function(){
        return Promise.all([
            User.create({ username: 'moe' }),
            User.create({ username: 'larry' }),
        ]);
      })
  },
  models: {
    User: User
  }
};
