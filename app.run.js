(function() {

  'use strict';

  angular
    .module('instrumentApp')
    .run(function($rootScope, authService, authManager) {

      // Put the authService on $rootScope so its methods
      // can be accessed from the nav bar
      authService.registerAuthenticationListener();
    });

})();