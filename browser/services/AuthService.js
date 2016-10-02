angular.module('app')
	.factory('AuthService', function($http){
		var _user = {};

		return {

			user: _user,

			login: function(credentials){
				return $http.post('/api/sessions', credentials)
				.then(function(result){
					angular.copy(result.data, _user);
					return _user;
				})
				.catch(function(err){
					console.log(err)
				})

			},

			logout: function(){
				return $http.delete('/api/sessions')
				.then(function(){
					angular.copy({}, _user);
					return _user;
				})
				.catch(function(err){
					console.log(err);
				})
			},

			getUser: function(){
				return _user;

				// return $http.get('/api/sessions')
				// .then(function(user){
				// 	return _user;
				// })
				// .catch(function(err){
				// 	console.log(err);
				// })
			}
		};
	})