'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('instrumentList').
  component('instrumentList', {
    templateUrl: 'instrument-list/instrument-list.template.html',
    controller: function InstrumentController($http) {
      var self = this;
      self.orderProp = 'age';''

      $http.get('phones/phones.json').then(function(response) {
        self.phones = response.data;
      });
    }
  });
