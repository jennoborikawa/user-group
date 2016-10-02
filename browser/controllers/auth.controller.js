angular.module('app')
	.controller('AuthCtrl', function($scope, AuthService, $state){

		$scope.login = function (credentials){
			// console.log('login pressed');
			AuthService.login(credentials)
			.then(function(){
				$state.go('home');
			});
		};

		$scope.logout = function(){
			AuthService.logout()
			.then(function(){
				$state.go('home');
			})
		};

	})