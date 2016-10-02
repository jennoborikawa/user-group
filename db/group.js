var db = require('./_db');
var User = require('./user');

var Group = db.define('group', {
	name: {
		type: db.Sequelize.TEXT,
		allowNull: false
	}
});

User.belongsTo(Group);

module.exports = Group;