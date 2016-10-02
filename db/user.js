var db = require('./_db');

var User = db.define('user', {
	username: {
		type: db.Sequelize.TEXT,
		allowNull: false
	},
	password: {
		type: db.Sequelize.TEXT,
		allowNull: false
	}
});

module.exports = User;
