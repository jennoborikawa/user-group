angular.module('app')
	.factory('AuthService', function($q){
		var _user = {}; 

		return {
			login: function(){
				var dfd = $q.defer(); 
				angular.copy({id:3}, _user); 
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