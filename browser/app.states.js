angular.module('app')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/', 
				templateUrl: '/browser/templates/home.html'
			})
			.state('settings', {
				url: '/settings', 
				templateUrl: '/browser/templates/settings.html' 

			})
			.state('login', {
				url: '/login',
				templateUrl: '/browser/templates/login.html'
			})
	}); 