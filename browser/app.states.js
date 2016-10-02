angular.module('app')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/', 
				template: 'HOME'
			})
			.state('settings', {
				url: '/settings', 
				template: 'x' 

			})
			.state('login', {
				url: '/login',
				template: 'x'
			})
	})