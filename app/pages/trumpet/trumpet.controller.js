(function() {

  'use strict';

  angular
		.module('instrumentApp')
		.controller('trumpetController', trumpetController);

		trumpetController.$inject = ['$rootScope', '$scope', 'angularLoad'];

		function trumpetController($rootScope, $scope, angularLoad) {
			$scope.title = "Trumpet";
			$scope.instrument = "trumpet";
			$scope.message = 'Trumpet is what you chose';

			$(document).ready(function() {
				console.log("trumpet script loaded...");  

		  	$(".trumpet-note-buttons").on("click", function() {
					$(".overlay").hide();
					switch($(this).attr("id")) {
						case "button-trumpet-C":
							$("#img-trumpet-C").show();
							break;
						case "button-trumpet-C#":
							$("#img-trumpet-Csharp").show();
							break;
						case "button-trumpet-D":
							$("#img-trumpet-D").show();
						    break;    
						case "button-trumpet-D#":
						  $("#img-trumpet-Dsharp").show();
						 	break;
						case "button-trumpet-E":
					    $("#img-trumpet-E").show();
					    break;
						case "button-trumpet-F":
					    $("#img-trumpet-F").show();
					    break;
						case "button-trumpet-F#":
					    $("#img-trumpet-Fsharp").show();
						 	break;    
						case "button-trumpet-G":
					    $("#img-trumpet-G").show();
						 	break;          
				    case "button-trumpet-G#":
					    $("#img-trumpet-Gsharp").show();
						 	break;
						case "button-trumpet-A":
					    $("#img-trumpet-A").show();
							break;
						case "button-trumpet-A#":
					    $("#img-trumpet-Asharp").show();
						 	break;
						case "button-trumpet-B":
					    $("#img-trumpet-B").show();
						 	break;
					}
				});
		  })
		}
})();