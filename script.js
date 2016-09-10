var app = angular.module('instrumentApp', ['ngRoute']);

app.config(function($routeProvider) {
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
});

app.controller('mainController', function($scope) {
	$scope.message = 'Welcome to the main page!';
});

app.controller('clarinetController', function($scope) {
	$scope.message = 'You chose the clarinet!';
	$scope.notelist = [
		{ name: "C" },
		{ name: "D" },
		{ name: "E" }];
	// var noteButtonsArray = [];

	// for(x = 0; x < notes.length; x++) {
	// 	noteButtonsArray.push('<li><button onclick="bla">' + notes[x] + '</button></li>');
	// }

	// var noteButtons = noteButtonsArray.join("");
	// $scope.noteButtons = noteButtons;
	// console.log(noteButtons);

});

// app.factory('ClarinetNotes', function() {
// 	console.log('')
// });

app.controller('trumpetController', function($scope) {
	$scope.message = 'Trumpet is what you chose';
});
