var vickyapp = angular.module("myapp", []);

myapp.controller("HelloAngular", ['$scope', 
	function HelloAngular($scope){
		$scope.greeting = {text: 'Hello'};
	}
]);