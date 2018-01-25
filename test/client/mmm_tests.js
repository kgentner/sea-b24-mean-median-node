'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('mmmController', function() {
  var $controllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var mmmController = $controllerConstructor('MmmController', {$scope: $scope});
    
    expect(typeof mmmController).toBe('object');
  });

  describe('Mean, Median, Mode Functionality', function() {

    it('should invalidate non-numerical input', function() {
      $controllerConstructor('MmmController', {$scope: $scope});
      $scope.numInput = '3 5 7 y';
      $scope.calcMMM();

      expect($scope.mean).toBe('invalid input');
      expect($scope.median).toBe('invalid input');
      expect($scope.mode).toBe('invalid input');
    });

    it('should display nothing when the input is an empty string', function() {
      $controllerConstructor('MmmController', {$scope: $scope});
      $scope.numInput = '';
      $scope.calcMMM();

      expect($scope.mean).toBe(null);
      expect($scope.median).toBe(null);
      expect($scope.mode).toBe(null);
    });

    it('should display numerical values with proper input', function() {
      $controllerConstructor('MmmController', {$scope: $scope});
      $scope.numInput = '3 5 7 9';
      $scope.calcMMM();

      expect($scope.mean).toBe(6);
      expect($scope.median).toBe(6);
      expect($scope.mode).toBe(3);
    });
  });
});
