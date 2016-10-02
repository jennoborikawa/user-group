var expect = require('chai').expect;
var db = require('../db');
var User = require('../db').models.User;

describe('Models', function(){
  beforeEach(function(done){
    db.syncAndSeed()
      .then(function(){
        done();
      })
      .catch(done);
  });
  describe('User', function(){
    it('exists', function(){
      expect(User).to.be.ok;
    
    });
  });

  describe('findAll', function(){
    var users;
    beforeEach(function(done){
      User.findAll()
        .then(function(_users){
          users = _users;
          done();
        })
        .catch(done);
    });

    it('there are two of them', function(){
      expect(users.length).to.equal(2);
    });
  });
});
