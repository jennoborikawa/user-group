angular.module('app')
	.controller('AuthCtrl', function($scope, AuthService, $state){
		
		$scope.user = {}; 

		$scope.login = function (user){
			console.log(user);
			// AuthService.login($scope.user)
			// .then(function(){
			// 	$state.go('home'); 
			// })
		}; 

		$scope.logout = function(){
			AuthService.logout()
			.then(function(){
				$state.go('home'); 
			})
		}; 

		$scope.getUser = function(){
			return AuthService.getUser(); 
		}; 

	}); 