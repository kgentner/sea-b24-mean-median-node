'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('mmmController', function() {
    var $controllerConstructor;
    var $httpBackend;
    var $scope;

    beforeEach(angular.mock.module('mmmApp'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controllerConstructor = $controller;
    }));

    it('should be able to create a controller', function() {
        var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
        
        expect(typeof mmmController).toBe('object');
    });

    describe('rest request', function() {
        beforeEach(angular.mock.inject(function(_$httpBackend_) {
            $httpBackend = _$httpBackend_;
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should invalidate non-numerical input', function() {
            $httpBackend.expectPOST('/api/mmm').respond(200, {mean: 'invalid input',
                median: 'invalid input', mode: 'invalid input'});
            $controllerConstructor('mmmCtrl', {$scope: $scope});
            $scope.numInput = '3 5 7 y';
            $scope.calcMMM();
            $httpBackend.flush();

            expect($scope.mean).toBe('invalid input');
            expect($scope.median).toBe('invalid input');
            expect($scope.mode).toBe('invalid input');
        });

        it('should display nothing when the input is an empty string', function() {
            $httpBackend.expectPOST('/api/mmm')
                .respond(200, {mean: null, median: null, mode: null});
            $controllerConstructor('mmmCtrl', {$scope: $scope});
            $scope.numInput = '';
            $scope.calcMMM();
            $httpBackend.flush();

            expect($scope.mean).toBe(null);
            expect($scope.median).toBe(null);
            expect($scope.mode).toBe(null);
        });

        it('should display numerical values with proper input', function() {
            $httpBackend.expectPOST('/api/mmm')
                .respond(200, {mean: 6, median: 6, mode: 3});
            $controllerConstructor('mmmCtrl', {$scope: $scope});
            $scope.numInput = '3 5 7 9';
            $scope.calcMMM();
            $httpBackend.flush();

            expect($scope.mean).toBe(6);
            expect($scope.median).toBe(6);
            expect($scope.mode).toBe(3);
        });
    });
});
