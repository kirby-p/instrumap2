(function() {

  'use strict';

  angular
    .module('instrumentApp')
    .controller('keyboardController', keyboardController);

    keyboardController.$inject = ['$rootScope', '$scope', 'angularLoad'];

    function keyboardController($rootScope, $scope, angularLoad) {
      $scope.enharmonickeys = [
        { name: "C#",
          altname: "Db",
          writename: "Csharp" },
        { name: "D#",
          altname: "Eb",
          writename: "Dsharp",
          space: "extraSpace" },
        { name: "F#",
          altname: "Gb",
          writename: "Fsharp" },
        { name: "G#",
          altname: "Ab",
          writename: "Gsharp" },      
        { name: "A#",
          altname: "Bb",
          writename: "Asharp",
          space: "extraSpace" },  
      ];
      $scope.naturalkeys = [
        { name: "C" },
        { name: "D" },
        { name: "E" },
        { name: "F" },
        { name: "G" },
        { name: "A" },
        { name: "B" },
      ];
    }
})();