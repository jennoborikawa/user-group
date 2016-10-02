var db = require('./_db');

var User = require('./user');
var Group = require('./group');

module.exports = {
  syncAndSeed: function(){
    return db.sync({ force: true })
      .then(function(){
        return Promise.all([
            Group.create({name: 'Admin'}),
            Group.create({name: 'HR'}),
            User.create({ username: 'moe', password: 'foo', groupId: 1}),
            User.create({ username: 'larry', password: 'bar', groupId: 1 }),
        ]);
      })
  },
  models: {
    User: User,
    Group: Group
  }
};
