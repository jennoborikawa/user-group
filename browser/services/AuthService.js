angular.module('app')
	.factory('AuthService', function($q){
		var _user = {}; 

		return {

			user: _user, 

			login: function(){
				console.log('login running')
				var dfd = $q.defer(); 
				angular.copy({id:3, username: 'mgreen'}, _user); 
				console.log(_user); 
				dfd.resolve(); 
				return dfd.promise
			}, 
			logout: function(){
				var dfd = $q.defer(); 
				angular.copy({}, _user); 
				dfd.resolve(); 
				return dfd.promise; 
			}
		}; 
	})