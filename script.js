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
		})

		.when('/trumpet', {
			templateUrl : 'pages/basic-template.html',
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
	$scope.message = 'Welcome to Instrumap!  This is an interactive tool and central location for beginning musicians to find fingering charts for their instrument.';
	$scope.instructions = 'Click on the compass above to search for your instrument.  Then select the note on the keyboard for the fingering you would like to learn.';
});

app.controller('keyboardController', function($scope) {
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
	];
	$scope.naturalkeys = [
		{	name: "C"	},
		{	name: "D"	},
		{	name: "E"	},
		{	name: "F"	},
		{	name: "G"	},
		{	name: "A"	},
		{	name: "B"	},
	];
});

app.controller('clarinetController', function($scope) {
	$scope.title = 'Clarinet';
	$scope.instrument = 'clarinet';
	$scope.message = 'You chose the clarinet!';

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
			}
		});
	})

});

app.controller('trumpetController', function($scope) {
	$scope.title = "Trumpet";
	$scope.instrument = "trumpet";
	$scope.message = 'Trumpet is what you chose';

		$(document).ready(function() {
		console.log("trumpet script loaded...");	

		$(".trumpet-note-buttons").on("click", function() {
			$(".overlay").hide();
			switch($(this).attr("id")) {
			    case "button-trumpet-C":
			    	console.log("C note");
			    	$("#img-trumpet-C").show();
					break;
			    case "button-trumpet-C#":
			    	console.log("C# note");
			    	$("#img-trumpet-Csharp").show();
					break;
			    case "button-trumpet-D":
			    	console.log("D note");
			    	$("#img-trumpet-D").show();
			    	break;    
			    case "button-trumpet-D#":
			    	console.log("D# note");
			    	$("#img-trumpet-Dsharp").show();
					break;
			  	case "button-trumpet-E":
			    	$("#img-trumpet-E").show();
			    	break;
			  	case "button-trumpet-F":
			    	$("#img-trumpet-F").show();
			    	break;
			    case "button-trumpet-F#":
			    	console.log("F# note");
			    	$("#img-trumpet-Fsharp").show();
					break;		
			    case "button-trumpet-G":
			    	console.log("G note");
			    	$("#img-trumpet-G").show();
					break;			    
				case "button-trumpet-G#":
			    	console.log("G# note");
			    	$("#img-trumpet-Gsharp").show();
					break;
			    case "button-trumpet-A":
			    	console.log("A note");
			    	$("#img-trumpet-A").show();
					break;

			    case "button-trumpet-A#":
			    	console.log("A# note");
			    	$("#img-trumpet-Asharp").show();
					break;

			    case "button-trumpet-B":
			    	console.log("B note");
			    	$("#img-trumpet-B").show();
					break;
			}
		});
	})

});

function openNav() {
    document.getElementById("instrumapNav").style.height = "60%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("instrumapNav").style.height = "0%";
}