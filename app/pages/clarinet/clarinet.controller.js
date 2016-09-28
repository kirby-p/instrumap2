(function() {

  'use strict';

  angular
    .module('instrumentApp')
    .controller('clarinetController', clarinetController);

    clarinetController.$inject = ['$rootScope', '$scope', 'angularLoad'];

    function clarinetController($rootScope, $scope, angularLoad) {
      $scope.title = 'Clarinet';
      $scope.instrument = 'clarinet';
      $scope.message = 'You chose the clarinet!';

      $(document).ready(function() {
        console.log("clarinet script loaded..."); 

        $(".clarinet-note-buttons").on("click", function() {
          $(".overlay").hide();
          switch($(this).attr("id")) {
              case "button-clarinet-C":
                $("#img-clarinet-C").show();
                break;
              case "button-clarinet-C#":
                $("#img-clarinet-Csharp").show();
                break;
              case "button-clarinet-D":
                $("#img-clarinet-D").show();
                break;    
              case "button-clarinet-D#":
                $("#img-clarinet-Dsharp").show();
                break;
              case "button-clarinet-E":
                $("#img-clarinet-E").show();
                break;
              case "button-clarinet-F":
                $("#img-clarinet-F").show();
                break;
              case "button-clarinet-F#":
                $("#img-clarinet-Fsharp").show();
              break;    
             // No case for "G"; played open
              case "button-clarinet-G#":
                $("#img-clarinet-Gsharp").show();
                break;
              case "button-clarinet-A":
                $("#img-clarinet-A").show();
                break;
              case "button-clarinet-A#":
                $("#img-clarinet-Asharp").show();
                break;
              case "button-clarinet-B":
                $("#img-clarinet-B").show();
                break;
            }
          });
        })
      }
})();