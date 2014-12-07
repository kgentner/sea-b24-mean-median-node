'use strict';
/*thanks to S. Burbidge, J. Elsey, S. Lingwood, & C. Renwick for help*/

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', 'mmmBuilder',
    function($scope, mmmBuilder) {

      $scope.calcMMM = function() {
        var data = mmmBuilder.buildMMM($scope.numInput.split(' '));
        $scope.mean = data.mean;
        $scope.median = data.median;
        $scope.mode = data.mode;
      };
    }]);
};
