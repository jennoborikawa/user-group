angular.module('app')
	.controller('GroupCtrl', function($scope, GroupService, $state){

		$scope.groups = GroupService.groups; 

		$scope.findAll = function (){
			GroupService.findAll()
			.then(function(){
				$state.
			})
		}

	})