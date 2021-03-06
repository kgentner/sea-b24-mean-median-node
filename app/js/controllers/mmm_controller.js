'use strict';
/*thanks to Joe Elsey, Stephanie Lingwood, & Charles Renwick for help*/

module.exports = function(app) {
    app.controller('MmmController', ['$scope', '$http', function($scope, $http) {

        $scope.calcMMM = function() {
            var numArray = $scope.numInput.split(' ');
            $http({
                method: 'POST',
                url: '/api/mmm',
                data: {numList: numArray}
            })
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
