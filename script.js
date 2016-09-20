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
	// $scope.notelist = [
	// 	{ 	name: "C",
	// 	  	type: "natural"},
	//   	{ 	name: "C#",
	//   	  	altname: "/Db",
	//   	  	type: "enharmonic",
	//   	  	suffix: "sharp" },
	// 	{ 	name: "D",
	// 	  	type: "natural" },
	//   	{ 	name: "D#",
	//   	  	altname: "/Eb",
	//   	  	type: "enharmonic",
	//   	  	suffix: "sharp" },
	// 	{ 	name: "E",
	// 	  	type: "natural" },
	// 	{ 	name: "F",
	// 	  	type: "natural" },		
	// 	{ 	name: "G",
	// 	  	type: "natural" },	
	// 	{ 	name: "A",
	// 	 	type: "natural" },
	// 	{	name: "B",
	// 	 	type: "natural" },
	// 	];
	$scope.enharmonickeys = [
		{	name: "C#",
			altname: "Db"	},
		{	name: "D#",
			altname: "Eb",
			space: "extraSpace"	},
		{	name: "F#",
			altname: "Gb"	},
		{	name: "G#",
			altname: "Ab"	},			
		{	name: "A#",
			altname: "Bb",
			space: "extraSpace"	},	
		{	name: "C#",
			altname: "Db"	},
		{	name: "D#",
			altname: "Eb",
			space: "extraSpace"	},
		{	name: "F#",
			altname: "Gb"	},
	];
	$scope.naturalkeys = [
		{	name: "C"	},
		{	name: "D"	},
		{	name: "E"	},
		{	name: "F"	},
		{	name: "G"	},
		{	name: "A"	},
		{	name: "B"	},
		{	name: "C"	},
		{	name: "D"	},
		{	name: "E"	},
		{	name: "F"	},
		{	name: "G"	},
		{	name: "A"	},
		{	name: "B"	},
		{	name: "C"	},
		{	name: "D"	},
		{	name: "E"	},
		{	name: "F"	},

	];
	$scope.script = './app/scripts/clarinet-script.js';
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
