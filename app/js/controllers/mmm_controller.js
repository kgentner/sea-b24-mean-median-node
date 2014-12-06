'use strict';
/*thanks to Joe Elsey, Stephanie Lingwood, & Charles Renwick for help*/

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', 'ResourceBackend',
    function($scope, $http, ResourceBackend) {

      var mmmBackend = new ResourceBackend();

      $scope.calcMMM = function() {
        mmmBackend.postMMM ($scope.numInput.split(' '))
        .success(function(data) {
          $scope.mean = data.mean;
          $scope.median = data.median;
          $scope.mode = data.mode;
        })
        .error(function(data) {
          console.log(data);
        });
      };
    }]);
};
