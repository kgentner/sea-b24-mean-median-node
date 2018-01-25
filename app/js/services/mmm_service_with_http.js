'use strict';

module.exports = function(app) {
  var handleErrors = function(data) {
    console.log(data);
  };

  app.factory('ResourceBackend', ['$http', function($http) {
    return function() {
      return {
        postMMM: function(resource) {
          return $http({
            method: 'POST',
            url: '/api/mmm',
            data: {numList: resource}
          })
            .error(handleErrors);
        }
      };
    };
  }]);
};
