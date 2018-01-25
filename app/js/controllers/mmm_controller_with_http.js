'use strict';
/*thanks to S. Burbidge, J. Elsey, S. Lingwood, & C. Renwick for help*/

module.exports = function(app) {
  app.controller('MmmController', ['$scope', '$http', 'ResourceBackend',
    function($scope, $http, ResourceBackend) {

      var mmmBackend = new ResourceBackend();

      $scope.calcMMM = function() {
        mmmBackend.postMMM ($scope.numInput.split(' '))
          .success(function(data) {
            $scope.mean = data.mean;
            $scope.median = data.median;
            $scope.mode = data.mode;
          });
      };
    }]);
};
