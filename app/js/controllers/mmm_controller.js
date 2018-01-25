'use strict';
/*thanks to S. Burbidge, J. Elsey, S. Lingwood, & C. Renwick for help*/

module.exports = function(app) {
  app.controller('MmmController', ['$scope', 'mmmBuilder',
    function($scope, mmmBuilder) {

      $scope.calcMMM = function() {
        var numArray = $scope.numInput.split(' ');
        var data = mmmBuilder.buildMMM(numArray);
        $scope.mean = data.mean;
        $scope.median = data.median;
        $scope.mode = data.mode;
      };
    }]);
};
//
