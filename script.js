var app = angular.module('instrumentApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller 	: 'mainController'
		})

		.when('/clarinet', {
			templateUrl : 'pages/basic-template.html',
			controller 	: 'clarinetController'
		})

		.when('/trumpet', {
			templateUrl : 'pages/trumpet.html',
			controller 	: 'trumpetController'
		})
});

// function MainCtrl($scope, $location) {
// 	$scope.setRoute = function(route) {
// 		$location.path(route);
// 	}
// }

app.controller('mainController', function($scope) {
	$scope.title = 'Home';
	$scope.message = 'Welcome to the main page!';
});

app.controller('keyboardController', function($scope) {
	$scope.notelist = [
		{ name: "C",
		  type: "natural" },
	  	{ name: "C# / Db",
	  	  type: "enharmonic" },
		{ name: "D" },
		{ name: "E" },
		{ name: "F" },
		{ name: "G" },
		{ name: "A" },
		{ name: "B" },];
});

app.controller('clarinetController', function($scope) {
	$scope.title = 'Clarinet';
	$scope.instrument = 'clarinet';
	$scope.message = 'You chose the clarinet!';
});

app.controller('trumpetController', function($scope) {
	$scope.title = "Trumpet";
	$scope.instrument = "trumpet";
	$scope.message = 'Trumpet is what you chose';
});
