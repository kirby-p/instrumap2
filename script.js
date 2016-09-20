var app = angular.module('instrumentApp', ['ngRoute', 'angularLoad']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller 	: 'mainController'
		})

		.when('/clarinet', {
			templateUrl : 'pages/basic-template.html',
			controller 	: 'clarinetController',
			// resolve	 	: {deps: function($q, $rootScope) {
			// 	var deferred = $q.defer();
			// 	var dependencies = [
			// 		'./app/scripts/clarinet-script.js'
			// 	];

			// 	$script(dependencies, function() {
			// 		$rootScope.$apply(function() {
			// 			deferred.resolve();
			// 		});
			// 	});
			// 	return deferred.promise;
			// }}
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
			altname: "Db",
			writename: "Csharp"	},
		{	name: "D#",
			altname: "Eb",
			writename: "Dsharp",
			space: "extraSpace"	},
		{	name: "F#",
			altname: "Gb",
			writename: "Fsharp"	},
		{	name: "G#",
			altname: "Ab",
			writename: "Gsharp"	},			
		{	name: "A#",
			altname: "Bb",
			writename: "Asharp",
			space: "extraSpace"	},	
		// {	name: "C#",
		// 	altname: "Db",
		// 	writename: "Csharp"	},
		// {	name: "D#",
		// 	altname: "Eb",
		// 	writename: "Dsharp",
		// 	space: "extraSpace"	},
		// {	name: "F#",
		// 	altname: "Gb",
		// 	writename: "Fsharp"	},
	];
	$scope.naturalkeys = [
		{	name: "C"	},
		{	name: "D"	},
		{	name: "E"	},
		{	name: "F"	},
		{	name: "G"	},
		{	name: "A"	},
		{	name: "B"	},
		// {	name: "C"	},
		// {	name: "D"	},
		// {	name: "E"	},
		// {	name: "F"	},
		// {	name: "G"	},
		// {	name: "A"	},
		// {	name: "B"	},
		// {	name: "C"	},
		// {	name: "D"	},
		// {	name: "E"	},
		// {	name: "F"	},

	];
	// angularLoad.loadScript('./app/scripts/clarinet-script.js').then(function() {
	//     // Script loaded succesfully.
	//     // We can now start using the functions from someplugin.js
	// }).catch(function() {
	//     // There was some error loading the script. Meh
	// });
});

app.controller('clarinetController', function($scope) {
	$scope.title = 'Clarinet';
	$scope.instrument = 'clarinet';
	$scope.message = 'You chose the clarinet!';
	// $scope.lazyThings = [
	// 	{directive: 'clarinet-directive', file: './app/scripts/clarinet-script.js'}
	// ];
	// $scope.loaded = [];
	// $scope.load = function() {
	// 	var loadIndex = $scope.loaded.length;
	// 	if ($scope.lazyThings[loadIndex]) {
	// 		$scope.loaded.push($scope.lazyThings[loadIndex]);
	// 	}
	// }
	// load();
	
	$(document).ready(function() {
	console.log("clarinet script loaded...");	

	$(".clarinet-note-buttons").on("click", function() {
		$(".overlay").hide();
		switch($(this).attr("id")) {
		    case "button-clarinet-C":
		    	console.log("C note");
		    	$("#img-clarinet-C").show();
				break;
		    case "button-clarinet-C#":
		    	console.log("C# note");
		    	$("#img-clarinet-Csharp").show();
				break;
		    case "button-clarinet-D":
		    	console.log("D note");
		    	$("#img-clarinet-D").show();
		    	break;    
		    case "button-clarinet-D#":
		    	console.log("D# note");
		    	$("#img-clarinet-Dsharp").show();
				break;
		  	case "button-clarinet-E":
		    	$("#img-clarinet-E").show();
		    	break;
		  	case "button-clarinet-F":
		    	$("#img-clarinet-F").show();
		    	break;
		    case "button-clarinet-F#":
		    	console.log("F# note");
		    	$("#img-clarinet-Fsharp").show();
				break;		
			// No case for "G"; played open
		    case "button-clarinet-G#":
		    	console.log("G# note");
		    	$("#img-clarinet-Gsharp").show();
				break;
		    case "button-clarinet-A":
		    	console.log("A note");
		    	$("#img-clarinet-A").show();
				break;

		    case "button-clarinet-A#":
		    	console.log("A# note");
		    	$("#img-clarinet-Asharp").show();
				break;

		    case "button-clarinet-B":
		    	console.log("B note");
		    	$("#img-clarinet-B").show();
				break;

		// angularLoad.loadScript('./app/scripts/clarinet-script.js').then(function() {
		//     // Script loaded succesfully.
		//     // We can now start using the functions from someplugin.js
		//     console.log("Success!");
		// }).catch(function() {
		//     // There was some error loading the script. Meh
		//     console.log("Boo!");
		// });
			// var notes = {
			// 	"button-clarinet-C": "$('#img-clarinet-C').show();",
			// 	"button-clarinet-D": "$('#img-clarinet-D').show();"
			// };
			// if (notes[$(this).attr("id")]) {
			// 	notes[$(this).attr("id")]();
			// }
		}
	});
})

});

app.controller('trumpetController', function($scope) {
	$scope.title = "Trumpet";
	$scope.instrument = "trumpet";
	$scope.message = 'Trumpet is what you chose';
});

// app.factory('myService', function($http, $q) {
// 	return {
// 		getJs: function(path) {
// 			var deferred = $q.defer();

// 			$http.get(path).then(function(response) {
// 				deferred.resolve(response.data);
// 			});

// 			return deferred.promise;
// 		}
// 	}
// });

// app.directive('lazy', function($compile, $q, myService) {
// 	var directiveReturn = {
// 		restrict: 'A',
// 		scope: {
// 			lazy: '='
// 		},
// 		link: function(scope, elements) {
// 			myService.getJs(scope.lazy.file).then(function(data) {
// 				return addScript(scope.lazy.file, data, scope);
// 			}).then(function() {
// 				var $span = angular.element('')
// 			})
// 		}
// 	}
// });