angular.module('app')
	.controller('AuthCtrl', function($scope, AuthService, $state){
		
		$scope.user = AuthService.user; 

		$scope.login = function (){
			AuthService.login()
			.then(function(){
				$state.go('home'); 
			})
		}; 

		$scope.logout = function(){
			AuthService.logout()
			.then(function(){
				$state.go('home'); 
			})
		}; 

	}); 