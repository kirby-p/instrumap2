var instrumentApp = angular.module('instrumentApp', ['ngRoute']);

instrumentApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller 	: 'mainController'
		})

		.when('/clarinet', {
			templateUrl : 'pages/clarinet.html',
			controller 	: 'clarinetController'
		})

		.when('/trumpet', {
			templateUrl : 'pages/trumpet.html',
			controller 	: 'trumpetController'
		})

		// .when('/guitar', {
		// 	templateUrl : 'pages/guitar.html',
		// 	controller 	: 'guitarController'
		// });
});

instrumentApp.controller('mainController', function($scope) {
	$scope.message = 'Welcome to the main page!';
});

instrumentApp.controller('clarinetController', function($scope) {
	$scope.message = 'You chose the clarinet!';
});

instrumentApp.controller('trumpetController', function($scope) {
	$scope.message = 'Trumpet is what you chose';
});

// instrumentApp.controller('guitarController', function($scope) {
// 	$scope.message = 'Excellent choice, the guitar';
// });
