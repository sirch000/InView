"use strict";

angular.module('inView', [])
  .controller('inViewController', ['$scope', '$http', function($scope, $http) {
	$http.get('data.json').success(function(data) {
		$scope.floorplans = data.flooring.floorplans;
		$scope.fp1 = $scope.floorplans[0].url;
		$scope.flooring = data.flooring;
		//console.log($scope.floorplans);
  	});
  }]);
